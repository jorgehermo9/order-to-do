const express = require('express');
const mongoose = require("mongoose");
const md5 = require("md5");

const router = express.Router();
const dotenv = require("dotenv").config();
const model = require("../models/model");
const { response } = require('express');

//Firebase db
var admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert({
    "projectId": process.env.FIREBASE_PROJECT_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  }),
	storageBucket:"gs://order-to-do.appspot.com"
});
const bucket = admin.storage().bucket();

const User = model.User;
const Order = model.Order;


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qyahe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
	{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
	console.log("Connected to db");
});
const user = model.user;
const order = model.order;

const auth = async (user)=>{
	let users = await User.find({username:user.username})
	if(users.length>0){
		let target = users[0];
		if(target.password === md5(user.password)){
			return true;
		}
	}
	//If users.length == 0 or password !== user.password
	return false;
}
router.post("/register",(req,res)=>{

	const user = new User({username: req.body.user.username,password: md5(req.body.user.password)})
	User.find({username:user.username},(err,users)=>{
		if(err) return console.error(err);
		if(users.length ===0){
			user.save((err,user)=>{
				if(err) return console.error(err);
				console.log(`Created user ${user.username}`);
				res.send(JSON.stringify("created user"))
			});
		}
		else
			res.send(JSON.stringify("user already exists"));
	});
})
router.post("/login",(req,res)=>{
	auth(req.body.user).
	then(data => res.send(JSON.stringify({login:data})));
})
router.post("/add",async (req,res)=>{
	let logged = await auth(req.body.user);
	if(!logged) return;
	const types=["png","svg","ngc"];
	const username = req.body.user.username;
	const item = {...req.body.item};

	const order = new Order(req.body.item);
	for(let i=0; i<types.length; i++){
		if(item[types[i]]){
			const bucketFile =bucket.file(`users/${username}/${order._id}/${item[types[i]].name}`);
			const data = item[types[i]].file.split(',')[1];
			const buffer = new Buffer.from(data,"base64");
			await bucketFile.save(buffer,{
				contentType:"application/octet-stream"
			});
			order[`${types[i]}Url`].file = bucketFile.publicUrl();
			order[`${types[i]}Url`].name= item[types[i]].name;
		}
	}

	console.log(order);
	User.findOneAndUpdate(
		{username:req.body.user.username},
		{$push: {orders:order}},
		{returnOriginal:false,useFindAndModify:false},
		(err,item)=>{
			if(err) return console.error(err);
			res.send(JSON.stringify(item.orders[item.orders.length-1]));
			console.log("added order to user");
		}
	)
})
router.post("/remove",async (req,res)=>{
	let logged = await auth(req.body.user);
	if(!logged) return;

	const types=["png","svg","ngc"];
	const username = req.body.user.username;
	const item = {...req.body.item};

	//Delete item files
	bucket.deleteFiles(`users/${username}/${item._id}/`)

	
	const id = req.body.item._id;
	User.findOneAndUpdate(
		{username:req.body.user.username},
		{$pull:{"orders":{_id:id}}},
		{useFindAndModify:false},
		(err)=>{
			if(err) return console.error(err);
			res.send(JSON.stringify(req.body.item))
			console.log("removed order from user");
		}
	)
})
router.post("/edit",async (req,res)=>{
	let logged = await auth(req.body.user);
	if(!logged) return;

	const types=["png","svg","ngc"];
	const username = req.body.user.username;
	const item = {...req.body.item};
	
	const order = new Order(req.body.item);
	console.log(item);
	for(let i=0; i<types.length; i++){
		if(item[types[i]]){
			//If there is another file uploaded, remove first
			if(item[`${types[i]}Url`]){
				const prevFile =bucket.file(`users/${username}/${item._id}/${item[`${types[i]}Url`].name}`);
				prevFile.delete();
			}
			const bucketFile =bucket.file(`users/${username}/${item._id}/${item[types[i]].name}`);
			const data = item[types[i]].file.split(',')[1];
			const buffer = new Buffer.from(data,"base64");
			await bucketFile.save(buffer,{
				contentType:"application/octet-stream"
			});
			order[`${types[i]}Url`].file = bucketFile.publicUrl();
			order[`${types[i]}Url`].name= item[types[i]].name;
		}
	}

	User.findOneAndUpdate(
		{username:req.body.user.username,"orders._id":item._id},
		{$set:{"orders.$":order}},
		{returnOriginal:false,useFindAndModify:false},
		(err,user)=>{
			if(err) return console.error(err);
			res.send(JSON.stringify(user.orders.find(item=>item._id==req.body.item._id)));
			console.log("edited order from user");
		}
	)
})
router.post("/orders",async (req,res)=>{
	let logged = await auth(req.body.user);
	if(!logged) return;

	User.findOne({username:req.body.user.username},(err,user)=>{
		if(err) return console.error(err);
		res.send(JSON.stringify(user.orders));
	});
})

module.exports = router;
