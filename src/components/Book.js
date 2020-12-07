import React from 'react';
import { Link } from 'react-router-dom';

// Adapt to my Book object, Fix destructuring of props in line 8, decide what
// to show about the book in the return
// Fix a back button?

export const Book = ({ title, authors, average_rating, num_pages, isbn }) => {
  return (
    <section>
      <Link to="/" exact="true">
        <p>Go Back Home</p>
      </Link>

      <div>
        <h1>{title}</h1>
        <h2>{authors}</h2>
        <p>{`Average Rating: ${average_rating}`}</p>
        <p>{`Number of Pages: ${num_pages}`}</p>
        <p>{`ISBN: ${isbn}`}</p>
      </div>
    </section>
  )
};
