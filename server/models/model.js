const mongoose= require("mongoose");

const orderSchema = new mongoose.Schema({
	desc: String,
	client: String,
	address: String,
	checked: Boolean,
	pngUrl: {file: String, name: String},
	svgUrl: {file: String, name: String},
	ngcUrl: {file: String, name: String}
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
