import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h3>HOME</h3>
      </Link>

      <Link to="/search">
        <h3>Search by Author</h3>
      </Link>
    </nav>
  );
};
