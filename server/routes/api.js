const express = require('express');
const mongoose= require("mongoose");
const router = express.Router();
const dotenv = require("dotenv");
const model = require("../models/model");

const User = model.User;
const Order = model.Order;

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qyahe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
	{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
	console.log("Connected to db");
});
const user = model.user;
const order = model.order;

router.get("/create",(req,res)=>{
	const user = new User({username: "user",password: "user"})
	User.find({username:"user"},(err,users)=>{
		if(err) return console.error(err);
		if(users.length ===0){
			user.save((err,user)=>{
				if(err) return console.error(err);
				console.log(`Created user ${user.username}`);
				res.send("created user")
			});
		}
		else
			res.send("user already exists");
	});
})
router.post("/add",(req,res)=>{
	console.log(req.body.item);
	const order = new Order(req.body.item);
	User.findOneAndUpdate(
		{username:"user"},
		{$push: {orders:order}},
		{returnOriginal:false,useFindAndModify:false},
		(err,item)=>{
			if(err) return console.error(err);
			res.send(JSON.stringify(item.orders[item.orders.length-1]));
			console.log("added order to user");
		}
	)
})
router.post("/remove",(req,res)=>{
	const id = req.body.item._id;
	User.findOneAndUpdate(
		{username:"user"},
		{$pull:{"orders":{_id:id}}},
		{returnOriginal:false,useFindAndModify:false},
		(err)=>{
			if(err) return console.error(err);
			res.send(JSON.stringify(req.body.item))
			console.log("removed order from user");
		}
	)
})
router.post("/orders",(req,res)=>{
	User.findOne({username:"user"},(err,user)=>{
		if(err) return console.error(err);
		res.send(JSON.stringify(user.orders));
	});
})

module.exports = router;