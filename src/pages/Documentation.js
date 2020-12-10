import React from 'react';

import bookObject from './book-object-example.png';

export const Documentation = () => {
  return (
    <>
      <h1>Bookish API Documentation:</h1>
      <p>
        Vane&apos;s Bookish API is organized around <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener noreferrer">REST</a>.
        Right now it only performs GET requests in order to show different book
        listings based on a filter and the responses are sent in <a href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer">JSON</a> format.
      </p>

      <p>The different endpoints are easily testable via browser or we also recommend using <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a>.</p>

      <p>There is only one version of Bookish API released so far.</p>

      <h2>ERRORS:</h2>
      <p>
        The most common error that might come up is a 404, especially in the situation
        when a book ID or Author Name can&apos;t be matched.
      </p>
      <p>An error message has been included to help indicate what went wrong.</p>

      <h2>PAGINATION:</h2>
      <p>Example URL: https://vane-bookish-api.herokuapp.com/books?p=1</p>
      <p>
        Our dataset is made up of 500 different book entries. We have implemented pagination
        in order for the information to be more easily navigated. Each page will display 50
        books at a time. You can access the different pages by adding a <span>/books?p=1</span>
        query to the base URL as shown on the example path above.
      </p>

      <h3>Base URL:</h3>
      <h4>https://vane-bookish-api.herokuapp.com/</h4>

      <h2>CORE RESOURCES:</h2>

      <h3>GET /books?p=:pageNumber</h3>
      <p>
        Request to access the main books dataset: pagination has been implemented so
        the data is more manageable (each page shows 50 books). This dataset has a
        maximum of 10 pages.
      </p>

      <h3>The Books Object:</h3>
      <img src={bookObject} alt="JSON object" />

      <h3>GET /books/search?author=:authorName</h3>
      <p>
        Search books by a specific author, depending on the value assigned to authorName.
      </p>

      <h3>GET /books/top-rated</h3>
      <p>
        Filters the dataset for books with a rating higher than 4 and will show
        the first 20 results.
      </p>

      <h3>GET /books/top-rated?quickRead=true</h3>
      <p>
        First runs a filter for books with a rating higher than 4, and then picks the ones
        with less than 600 pages.
      </p>

      <h3>GET /books/reviews?choice=true</h3>
      <p>
        This filter will look for the books with more than 10,000 text reviews. It will
        choose from within the first 50 books in the dataset.
      </p>

      <h3>GET /books/book/:bookID</h3>
      <p>Shows a single book, based on the bookID</p>
    </>
  );
};
