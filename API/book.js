const Router = require('express').Router();

const BookModel = require("../Schema/book");
const AuthorModel = require("../Schema/author");

Router.get("/book",async (req, res) => {
    const getAllBooks = await BookModel.find();
    return res.json(getAllBooks);
});

Router.get("/book/:bookID",async (req, res) => {
    const getBookByID = await BookModel.findOne({
        ISBN: req.params.bookID,
    });

    if(!getBookByID)
    {
        return res.json({
            error: `No book found for ISBN of ${req.params.bookID}`,
        });
    }
    
    return res.json({
        book: getBookByID,
    });
});

Router.get("/book/:category",async (req, res) => {
    const getBookByCategory = await BookModel.findOne({
        ISBN: req.params.category,
    });

    if(!getBookByCategory)
    {
        return res.json({
            error: `No book found for ISBN of ${req.params.category}`,
        });
    }
    
    return res.json({
        book: getBookByCategory,
    });
});

Router.post("/book/new",async (req, res) => {
    try
    {
        const {newBook} = req.params.body;

        await BookModel.create(newBook);
        return res.json({
            message: `Book added successfully`
        });
    }
    catch(error) {
        return res.json({ error: error.message });
    }
});


module.exports = Router;