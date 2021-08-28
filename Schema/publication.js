const mongoose = require("mongoose");

const PublicationSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String],
});

const PublicatonModel = mongoose.model("publications", PublicationSchema);

module.exports = PublicatonModel;