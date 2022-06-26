const express =require("express");
const cors = require("cors");
const api = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT	|| 3001;

app.use("/api",api);
app.use(express.static("client/build"))





app.listen(port,()=>console.log(`Server listening on port ${port}`))

