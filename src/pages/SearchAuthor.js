import React, { useState } from 'react';

import { AuthorBooks } from '../components/AuthorBooks';
import { SorryNotFound } from '../components/SorryNotFound';

export const SearchAuthor = () => {
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://vane-bookish-api.herokuapp.com/books/search?author=${author}`)
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
        setAuthor('');
      })
      .catch(() => {
        console.error();
        setAuthor('');
      })
  };

  return (
    <>
      <h1>Search by author Page</h1>
      <form>
        <label htmlFor="authorName">
          Search by Author:
          <input
            id="authorName"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>SEARCH</button>
      </form>
      {/* When no books are found, the books state is set to the string we get as an error
      message in the console ("Sorry no books were found..."), when books are found, books
      becomes an array of results. Using this info to generate the NotFound page or the
      AuthorBooks Page */}
      {typeof books === 'string' ? <SorryNotFound /> : <AuthorBooks books={books} />}
    </>
  );
};
