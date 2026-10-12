const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookRoutes = require("./routes/bookRoutes");

const app = express();


// Middleware
app.use(express.json());
app.use(cors());


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/libraryDB")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });


// Routes
app.use("/api/books", bookRoutes);


// Home Route
app.get("/", (req, res) => {
    res.send("Library Management API is running");
});


// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});