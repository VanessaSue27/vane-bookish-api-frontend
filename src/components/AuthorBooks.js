import React from 'react';

export const AuthorBooks = ({ books }) => {
  return (
    <section>
      {books.map((book) => (
        <div key={book.bookID}>
          <p>{book.title}</p>
        </div>
      ))}
    </section>
  );
};
