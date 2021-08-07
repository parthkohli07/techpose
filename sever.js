const express = require("express")
const cors= require("cors")
const mongoose = require("mongoose")

const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/TechposeDB",{useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

app.use("/", require("./routes/noteroutes"))
app.listen(8000, function(res,req){
console.log("server running on port 8000")
})