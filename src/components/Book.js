import React from 'react';
import { Link } from 'react-router-dom';

import bookImg from './single-book.png';

// Adapt to my Book object, Fix destructuring of props in line 8, decide what
// to show about the book in the return
// Fix a back button?

export const Book = ({ title, authors, average_rating, num_pages, isbn }) => {
  return (
    <section className="single-book-section">
      <div className="back-link">
        <Link to="/" exact="true">
          Go Back Home
        </Link>
      </div>

      <div className="book-data-container">
        <div className="book-image">
          <img src={bookImg} alt="books" />
        </div>

        <div className="book-data-text">
          <h1>{title}</h1>
          <h2>By: {authors}</h2>
          <p>{`Average Rating: ${average_rating}`}</p>
          <p>{`Number of Pages: ${num_pages}`}</p>
          <p>{`ISBN: ${isbn}`}</p>
        </div>
      </div>
    </section>
  )
};
