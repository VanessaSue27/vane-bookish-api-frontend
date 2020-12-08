import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ReviewersChoice = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://vane-bookish-api.herokuapp.com/books?reviewersChoice=true')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json)
      })
  }, []);

  return (
    <>
      <h1>These Books have the most reviews by our Readers:</h1>
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
