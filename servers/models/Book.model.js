const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const BookSchema = mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Title is mandatory!"],
    minLength: [3, "Title can't be less than 3 chars!"],
    unique: true

  },
  image: {
    type: String,
  },
  Chapters: {
    type: String,
    enum: ["Chapter 1", "Chapter 2", "Chapter 3",""],
  },
  genre: {
    type: String,
    // required: true,
    enum: ["Drama", "Fantasy", "Action", "Comedy",""],
  },
  volume1: {
    type: String,
    // checkbox: ["volume 1", " Volume 2", " Volume 3"],

  },
  volume2: {
    type: String,
    // checkbox: ["volume 1", " Volume 2", " Volume 3"],
    
  },
  volume3: {
    type: String,
    // checkbox: ["volume 1", " Volume 2", " Volume 3"],
    
  },
  description: {
    type: String,
    required: [true, "Title is mandatory!"],
    minLength: [3, "Title can't be less than 3 chars!"],
  },
});
BookSchema.plugin(uniqueValidator);
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
