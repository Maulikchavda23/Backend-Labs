const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    facultyId: {
        type: String,
        required: true,
        unique: true
    },

    facultyName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Faculty", facultySchema);