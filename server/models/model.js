const mongoose= require("mongoose");

const orderSchema = new mongoose.Schema({
	desc: String,
	client: String,
	address: String,
	png: {file: String, name: String},
	svg: {file: String, name: String},
	ngc: {file: String, name: String},
	checked: Boolean,
})

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	orders:[orderSchema]
})

const User = mongoose.model("user",userSchema);
const Order = mongoose.model("order",orderSchema);

exports.User = User;
exports.Order = Order;
