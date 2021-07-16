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

const user = mongoose.model("user",userSchema);
const order = mongoose.model("order",orderSchema);

exports.user = user;
exports.order = order;
