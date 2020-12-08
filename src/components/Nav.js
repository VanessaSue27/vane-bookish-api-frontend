import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className="bookish-text">
        Vane&apos;s Bookish App
      </NavLink>

      <div className="nav-links">
        <NavLink to="/search">
          Search by Author
        </NavLink>

        <NavLink to="/top-rated">
          Top Rated Books
        </NavLink>

        <NavLink to="/reviewers-choice">
          Reviewer&apos;s Choice
        </NavLink>

        <NavLink to="/quick-read">
          Quick Read
        </NavLink>

        <NavLink to="/documentation">
          Bookish API Documentation
        </NavLink>
      </div>
    </nav>
  );
};
