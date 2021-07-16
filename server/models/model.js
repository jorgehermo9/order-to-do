const mongoose= require("mongoose");

const orderSchema = new mongoose.Schema({
	desc: String,
	client: String,
	address: String,
	png: String,
	svg: String,
	gnc: String,
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
