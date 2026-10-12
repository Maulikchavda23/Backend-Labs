const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        res.end()
        return
    }
    console.log("requsted",req.url)
    res.end("Hello World! from http server")

})

server.listen(3000,()=>{
    console.log("server is started in 3000 port")

})

