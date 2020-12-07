import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Book } from '../components/Book';

export const BookDetails = () => {
  const { bookID } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`https://vane-bookish-api.herokuapp.com/books/book/${bookID}`)
      .then((response) => response.json())
      .then((json) => {
        setBook(json)
      })
      .catch(() => {
        console.error()
      })
  }, [bookID])

  return (
    <Book {...book} />
  )
};

// ADAPT BELOW LOGIC TO MY BOOKS PROJECT: If I want to add Notfound and Loading Page

// if(movie.success === false) {
//   return (
//     <NotFound />
//   )
// } else if (movie.id === undefined) {
//   return (
//     <Loading />
//   )
// } else {
//   return (
//     //We send the whole movie object to the Movie component so it has
//     //all the data to display
//     <Book {...book} />
//   )
// }
