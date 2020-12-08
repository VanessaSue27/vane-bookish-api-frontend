import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const QuickRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://vane-bookish-api.herokuapp.com/books/top-rated?quickRead=true')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json)
      })
  }, []);

  return (
    <>
      <h1>On the go? These books are both top rated and a quick read:</h1>
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