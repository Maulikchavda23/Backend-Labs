const http = require("http")

const fs = require("fs")

fs.writeFileSync("home.txt","this is from home file")
fs.writeFileSync("about.txt","this is from about file")
fs.writeFileSync("contact.txt","this is from contact file")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end(fs.readFileSync("home.txt"))
    }
    else if(req.url == "/about"){
        res.end(fs.readFileSync("about.txt"))
        
    }
    else if(req.url == "/contact"){
        res.end(fs.readFileSync("contact.txt"))
    }
    else{
        res.end("not correct path")
    }

})

server.listen(3000,()=>{
    console.log("server is started in 3000 port")

})
