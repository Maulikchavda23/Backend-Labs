const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("This is Home page")
})
app.get("/about",(req,res)=>{
    res.send("This is About page")
})
app.get("/contact",(req,res)=>{
    res.send("This is Contact page")
})
app.get("/payment",(req,res)=>{
    res.send("This is Payment page")
})
app.get("/cart",(req,res)=>{
    res.send("This is Cart page")
})



app.listen(3000,()=>{
    console.log("server is started in 3000 port")

})

