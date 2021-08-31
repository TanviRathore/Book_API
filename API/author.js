const Router = require("express").Router();
const AuthorModel = require("../Schema/author");

Router.get("/author", async (req, res) => {
    const getAllAuthors = await AuthorModel.find();
    res.json(getAllAuthors);
});

module.exports = Router;