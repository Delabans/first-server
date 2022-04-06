const express = require("express");

const app = express ();

app.get ("/" ,(req,res) =>{
    res.send("Hello World!</h1>");
});
app.get("/"(req, res) => {
    res.send("Hello, Everyone");
});

app.listen(5000,() => {
    console.log("🚀server up and running");
});