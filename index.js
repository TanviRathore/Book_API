require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

//initiallizing express
const ourApp = express();

// importing API
const Book = require("./API/book");
const Author = require("./API/author");
const Publication = require("./API/publication");

// connecting mongoose
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log("connection extablished!"))
    .catch((err) => {
        console.log(err);
    });

    // every data we send or retrieve is in json format, therefore specifying that we are using JSON
    ourApp.use(express.json());

    // Microservices
    ourApp.use("/book", Book);
    ourApp.use("/author", Author);
    ourApp.use("/publication", Publication);

    ourApp.get("/", (request, response) => {
        response.json({ message: "Server is working!!!!!!" });
    });
    
    // listening to server
    ourApp.listen(4000, () => console.log("Server is running"));

