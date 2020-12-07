import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import { BooksList } from './pages/BooksList';
import { BookDetails } from './pages/BookDetails';
import { TopRated } from './pages/TopRated';
import { ReviewersChoice } from './pages/ReviewersChoice';
import { QuickRead } from './pages/QuickRead';

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />

        <Switch>
          <Route path="/" exact>
            <BooksList />
          </Route>

          <Route path="/books/:bookID">
            <BookDetails />
          </Route>

          <Route path="/top-rated">
            <TopRated />
          </Route>

          <Route path="/reviewers-choice">
            <ReviewersChoice />
          </Route>

          <Route path="/quick-read">
            <QuickRead />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  )
};

// Implement search by author field: maybe in BooksList component: have a text input to save the author entered by user
// save that locally and setbooks to the result of search (instead of the original setBoooks with 50 items).