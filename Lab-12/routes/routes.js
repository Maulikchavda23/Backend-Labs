const express = require("express");

const Book = require("../models/Book");

const router = express.Router();


// CREATE BOOK
router.post("/", async (req, res) => {

    try {

        const book = new Book(req.body);

        const result = await book.save();

        res.status(201).json({
            message: "Book added successfully",
            data: result
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// GET ALL BOOKS
router.get("/", async (req, res) => {

    try {

        const books = await Book.find();

        res.status(200).json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// GET BOOK BY ID
router.get("/:id", async (req, res) => {

    try {

        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// UPDATE BOOK
router.put("/:id", async (req, res) => {

    try {

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book updated successfully",
            data: book
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// DELETE BOOK
router.delete("/:id", async (req, res) => {

    try {

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = router;