import React from 'react';
import { Link } from 'react-router-dom';

export const AuthorBooks = ({ books }) => {
  return (
    <section>
      {books.map((book) => (
        <Link to={`/books/${book.bookID}`}>
          <div>
            <p>{book.title}</p>
            <p>{book.authors}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};
