import NotFoundError from "../../errors/NotFoundError.js";

import bookData from "../../data/books.json" assert { type: "json" };

const updateBookById = (id, title, author, isbn, pages, available, genre) => {
  const book = bookData.books.find((book) => book.id === id);

  if (!book) {
    throw new NotFoundError("book", id);
  }

  book.title = title ?? book.title;
  book.author = author ?? book.author;
  book.isbn = isbn ?? book.isbn;
  book.pages = pages ?? book.pages;
  book.available = available ?? book.available;
  book.genre = genre ?? book.genre;

  return book;
};

export default updateBookById;
