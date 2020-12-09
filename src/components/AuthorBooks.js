import React from 'react';
import { Link } from 'react-router-dom';

export const AuthorBooks = ({ books }) => {
  return (
    <section className="books-list">
      {books.map((book) => (
        <div className="book-card" key={book.bookID}>
          <Link to={`/books/${book.bookID}`} key={book.bookID}>
            <div>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.authors}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
