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
      <div className="subtitles-container">
        <h1 className="books-subtitle">Books</h1>
        <h2 className="second-subtitle">Top Reads Available Right Now</h2>
      </div>
      <section className="books-list">
        {books.map((book) => (
          <div className="book-card" key={book.bookID}>
            <Link to={`/books/${book.bookID}`}>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.authors}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};
