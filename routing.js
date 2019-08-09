var express = require("express");
var app = express();
app.get("/center" , function(httprequest,httpresponse)
{
    httpresponse.send("chroma");
    
})
app.listen("3003",()=>
{
    console.log("server is created")
})
