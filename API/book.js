const Router = require('express').Router();

const BookModel = require("../Schema/book");
const AuthorModel = require("../Schema/author");

Router.get("/book",async (req, res) => {
    const getAllBooks = await BookModel.find();
    return res.json(getAllBooks);
});

module.exports = Router;