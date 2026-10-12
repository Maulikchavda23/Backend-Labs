const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("This is homepage")
    }
    else if(req.url == "/about"){
        res.end("This is aboutpage")
        
    }
    else if(req.url == "/payment"){
        res.end("This is paymentpage")
    }
    else if(req.url == "/cart"){
        res.end("This is cartpage")
    }
    else if(req.url == "/contact"){
        res.end("This is contactpage")
    }
    else{
        res.end("not correct path")
    }

})

server.listen(3000,()=>{
    console.log("server is started in 3000 port")

})

