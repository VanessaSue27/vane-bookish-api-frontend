import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TopRated = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://vane-bookish-api.herokuapp.com/books/top-rated')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json)
      })
  }, []);

  return (
    <>
      <h1>These Books have been rated 4+ by our Readers:</h1>
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
