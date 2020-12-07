import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const BooksList = () => {
  const [books, setBooks] = useState([]);

  // Do the main fetch to the /books endpoint, set response as
  // the books variable on our local state
  useEffect(() => {
    fetch('https://vane-bookish-api.herokuapp.com/books')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json)
      })
  }, []);

  // map over the books array we got in response to show them on browser
  return (
    <>
      <section>
        {books.map((book) => (
          <div className="book-card" key={book.bookID}>
            <Link to={`/books/${book.bookID}`}>
              <p>{book.title}</p>
              <p>{book.authors}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};
