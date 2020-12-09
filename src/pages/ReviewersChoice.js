import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ReviewersChoice = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://vane-bookish-api.herokuapp.com/books/reviews?choice=true')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json)
      })
  }, []);

  return (
    <>
      <div className="subtitles-container">
        <h1 className="books-subtitle">Reviewer&apos;s Choice</h1>
        <h2 className="second-subtitle">These books have the most reviews by our readers</h2>
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
