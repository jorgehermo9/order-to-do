const express = require('express');
const mongoose = require("mongoose");
const md5 = require("md5");

const router = express.Router();
const dotenv = require("dotenv").config();
const model = require("../models/model");
const { response } = require('express');

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
	console.log("ando aqui")
	auth(req.body.user).
	then(data => res.send(JSON.stringify({login:data})));
})
router.post("/add",async (req,res)=>{
	let logged = await auth(req.body.user);
	if(!logged) return;
	
	console.log(req.body.item);
	const order = new Order(req.body.item);
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

	const id = req.body.item._id;
	User.findOneAndUpdate(
		{username:req.body.user.username,"orders._id":id},
		{$set:{"orders.$":req.body.item}},
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