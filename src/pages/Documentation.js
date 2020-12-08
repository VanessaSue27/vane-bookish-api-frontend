import React from 'react';

export const Documentation = () => {
  return (
    <>
      <h1>Bookish API Documentation:</h1>
      <h2>Main Endpoints:</h2>

      <h3>GET /books</h3>
      <p>Shows first fifty books from the data</p>

      <h3>GET /books?reviewersChoice=true</h3>
      <p>Query filter showing books from the first 50 chunk, only the ones with more than 10,000 text reviews</p>

      <h3>GET /books/top-rated</h3>
      <p>Filters the booksData for books with rating higher than 4 and then slices to show only 20 of those</p>

      <h3>GET /books/top-rated?quickRead=true</h3>
      <p>Query filter to show from those top rated books, only the ones with less than 600 pages</p>

      <h3>GET /books/:authorName</h3>
      <p>Shows books by a specific author, based on the authorName param</p>

      <h3>GET /books/book/:bookID</h3>
      <p>Shows a single book, based on the bookID</p>
    </>
  );
};
