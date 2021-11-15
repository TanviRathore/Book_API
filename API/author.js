const Router = require("express").Router();
const AuthorModel = require("../Schema/author");

// Route    - /author
// Des      - to get all authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
Router.get("/", async (req, res) => {
    const getAllAuthors = await AuthorModel.find();
    return res.json(getAllAuthors);
});

// Route     /author/new
// Description add new author
// Access PUBLIC
// Parameters NONE
// METHOD POST
Router.post("/new", (req, res) => {
    const { newAuthor } = req.body;

    AuthorModel.create(newAuthor);

    return res.json({ message: "Author added to the database" });
});

//TODO: Studen Task
// Route       /author/updateName
// Description Update name of the author
// Access      Public
// Parameters  id
// Method      Put
// Params in the req.body are always in string format
Router.put("/updateName", async (req, res) => {
    const { id } = req.params;
    const {newName} = req.body;

    const updatedAuthor = await AuthorModel.findOneAndUpdate(
        {
            id: id,
        },
        {
            $addToSet: {
                name: newName,
            },
        },
        {
            new: true,
        }
    );

    return res.json({
        name: updatedAuthor,
        message: "Name updated!!!",
    });
});

/*
Route               /author/delete
Description         delete an author
Access              PUBLIC
Parameters          id
Method              DELETE
*/
Router.delete("/author/delete/:id", (req, res) => {
    const { id } = req.params;

    const filteredAuthors = Database.Author.filter(
        (author) => author.id !== parseInt(id)
    );

    Database.Author = filteredAuthors;

    return res.json(Database.Author);
});


module.exports = Router;