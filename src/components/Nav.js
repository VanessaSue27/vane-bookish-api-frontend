import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h3>Vane&apos;s Bookish App</h3>
      </Link>

      <Link to="/search">
        <h3>Search by Author</h3>
      </Link>

      <Link to="/top-rated">
        <h3>Top Rated Books</h3>
      </Link>

      <Link to="/reviewers-choice">
        <h3>Reviewer&apos;s Choice</h3>
      </Link>

      <Link to="/quick-read">
        <h3>Quick Read</h3>
      </Link>

      <Link to="/documentation">
        <h3>Bookish API Documentation</h3>
      </Link>
    </nav>
  );
};
