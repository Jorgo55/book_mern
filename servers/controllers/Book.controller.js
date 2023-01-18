const User = require("../models/Book.model");

module.exports.getAllBooks = (req, res) => {
  User.find()
    .sort({ Title: 1 })
    .then((allBooks) => res.json(allBooks))
    .catch((err) => res.json({ message: "Missing Books", err }));
};

module.exports.createBook = (req, res) => {
  User.create(req.body)
    .then((newBook) => res.json(newBook))
    .catch((err) =>
      res.status(400).json({ message: "Book not created!", err })
    );
};

module.exports.getBook = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((oneBook) => res.json(oneBook))
    .catch((err) => res.json({ message: "Missing Book", err }));
};
module.exports.editBook = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((newBook) => res.json(newBook))
    .catch((err) => res.json({ message: "Couldn't edit Book", err }));
};

module.exports.deleteBook = (req, res) => {
  User.deleteOne(req.body)
    .then((newBoook) => res.json(newBoook))
    .catch((err) =>
      res.status(400).json({ message: "Book not deleted!", err })
    );
};
module.exports.deleteOneBook = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((deletedOne) => res.json(deletedOne))
    .catch((err) => res.json({ message: "Couldn't delete the Book", err }));
};
