import React, { useState } from 'react';

import { AuthorBooks } from '../components/AuthorBooks';

export const SearchAuthor = () => {
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const [consoleError, setConsoleError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://vane-bookish-api.herokuapp.com/books/${author}`)
      .then((response) => response.json())
      .then((json) => {
        setConsoleError(false);
        setBooks(json);
        setAuthor('');
      })
      .catch((error) => {
        console.log(error)
        setConsoleError(true);
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

      {consoleError ? <h1>Sorry!</h1> : <AuthorBooks books={books} />}
    </>
  );
};
