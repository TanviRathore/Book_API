const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    ISBN: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    authors: [String],
    language: String,
    pubDate: Number,
    numOfPage: Number,
    category: [String],
    publication: Number,
});

const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;