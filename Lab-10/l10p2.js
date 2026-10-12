const express = require("express");

const app = express()

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.send("hello world!")

})

app.listen(3000,()=>{
    console.log("server is started on 3000 port")
})