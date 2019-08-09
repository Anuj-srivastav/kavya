//import mongoose from 'mongoose';
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ganguly",{useNewUrlParser: true});
//var schema = mongoose.Schema;
var userSchema  = new mongoose.Schema({
    name:String,
    username: { type:String,required:true,unique :true},
    password: {type:String,required:true},
    admin:Boolean,
    address:String
});
var user = mongoose.model("users", userSchema);
var newuser = new user ({
    name:"peter parker",
    username: "anuj",
    password:"password",
    admin:true,
    address:"sector 19"
});
newuser.save(function(err) {
    if (err) throw err;
    console.log("user created");
});
