const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const moongoose = require("mongoose");

moongoose.connect("mongodb://localhost:27017/InternshipTest",{
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Setting things up
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const user = new moongoose.Schema({
    name: String,
    phoneNumber: String,
    email:String
});

app.get("/",(req,res)=>{
    res.send("hello world");        //main page
});

app.post("/login",(req,res)=>{
    const phone = req.body.phone;
    user.findOne({phone:phone},(result,err)=>{
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.redirect("/");
        }
    }); 
});

app.post("/requestProduct",(req,res)=>{
    const type = req.body.type;
    const name = req.body.name;
    const 
});

app.listen(process.env.PORT||3000, (req, res) => {
    console.log("Server Up and running at port 3000");
});