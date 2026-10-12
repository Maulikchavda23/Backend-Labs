const fs = require("fs");
const express = require("express");

const app = express()


app.get("/",(req,res)=>{
    fs.readFile("home.txt",(err,data)=>{
        if(err){
            res.status(500).jason({}).send(err)
        }
        else{
            res.status(200).type("text/html").send(data)
        }
    })
})
app.get("/contact",(req,res)=>{
    fs.readFile("contact.txt",(err,data)=>{
        if(err){
            res.status(500).jason({}).send(err)
        }
        else{
            res.status(200).type("text/html").send(data)
        }
    })
})
app.get("/about",(req,res)=>{
    fs.readFile("about.txt",(err,data)=>{
        if(err){
            res.status(500).jason({}).send(err)
        }
        else{
            res.status(200).type("text/html").send(data)
        }
    })
})


app.listen(3000,()=>{
    console.log("server is started on 3000 port")
})