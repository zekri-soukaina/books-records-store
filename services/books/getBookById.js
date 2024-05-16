import NotFoundError from "../../errors/NotFoundError.js";

import bookData from "../../data/books.json" assert { type: "json" };

const getBookById = (id) => {
  const book = bookData.books.find((book) => book.id === id);

  if (!book) {
    throw new NotFoundError("Book", id);
  }

  return book;
};

export default getBookById;
