const express = require("express");

const app = express()

function authMiddlewear(req,res,next){
    if(req.query.admin == "true"){
        console.log("admin")
        // res.send("admin")
        next();
    }
    else{
        console.log("middlewear closed!")
        res.status(403).send("access denied")
    }
}

app.get("/admin",authMiddlewear,(req,res)=>{
    console.log("admin Page");
    res.send("admin Page")

})

app.listen(3000,()=>{
    console.log("server is started on 3000 port")
})