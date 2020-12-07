import React from 'react';
import { Link } from 'react-router-dom';

export const AuthorBooks = ({ books }) => {
  return (
    <section>
      {books.map((book) => (
        <Link to={`/books/${book.bookID}`}>
          <p>{book.title}</p>
        </Link>
      ))}
    </section>
  );
};
