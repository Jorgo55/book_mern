const BookController = require("../controllers/Book.controller");

module.exports = (app) => {
  app.get("/api/getAllBooks", BookController.getAllBooks);
  app.post("/api/createBook", BookController.createBook);
  app.get("/api/getBook/:id", BookController.getBook);
  app.put("/api/editBook/:id", BookController.editBook);
  app.delete("/api/deleteBook", BookController.deleteBook);
  app.delete("/api/deleteOneBook/:id", BookController.deleteOneBook);
};
