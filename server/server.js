const express =require("express");
const cors = require("cors");
const mongoose= require("mongoose");
const dotenv = require("dotenv");
const model = require("./models/model");

const app = express();
dotenv.config();
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qyahe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
	{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("connected to db");
});

const user = model.user;
const order = model.order;

app.use(cors());
const port = process.env.PORT	|| 3001;




app.listen(port,()=>console.log(`Server listening on port ${port}`))

