const Router = require("express").Router();
const PublicationModel = require("../Schema/publication");

Router.get("/publication", async (req, res) => {
    const getAllPublication = await PublicationModel.find();
    res.json(getAllPublication);
});

module.exports = Router;