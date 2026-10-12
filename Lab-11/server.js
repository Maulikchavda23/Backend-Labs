const express = require("express");
const mongoose = require("mongoose");

const Faculty = require("./models/Faculty");

const app = express();

app.use(express.json());


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/facultyDB")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });


// CREATE Faculty
app.post("/api/faculty", async (req, res) => {

    try {

        const faculty = new Faculty(req.body);

        const result = await faculty.save();

        res.status(201).json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});


// GET All Faculty
app.get("/api/faculty", async (req, res) => {

    try {

        const faculty = await Faculty.find();

        res.status(200).json(faculty);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});


// GET Faculty By ID
app.get("/api/faculty/:id", async (req, res) => {

    try {

        const faculty = await Faculty.findById(req.params.id);

        if (!faculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json(faculty);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});


// UPDATE Faculty
app.put("/api/faculty/:id", async (req, res) => {

    try {

        const faculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if (!faculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json(faculty);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});


// DELETE Faculty
app.delete("/api/faculty/:id", async (req, res) => {

    try {

        const faculty = await Faculty.findByIdAndDelete(req.params.id);

        if (!faculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json({
            message: "Faculty deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});


// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});