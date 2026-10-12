const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
const SECRET_KEY = "mysecretkey";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "maulik" && password == "123") {
    const token = jwt.sign({ username: username }, SECRET_KEY, {
      expiresIn: "30s",
    });
    res.json({
      message: "login successful",  
      token: token,
    });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
});

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: "Token required" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) {
      return res.status(401).json({ message: "Invalid" });
    }
    req.user = decode
    next()
  });
}

app.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({ 
    message: "Welcome to dashboard page",
    user:req.user 
  });
});


app.listen(3000,()=>{
    console.log("server is started on 3000 port")
})