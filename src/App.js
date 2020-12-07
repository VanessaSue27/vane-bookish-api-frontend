import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import { BooksList } from './pages/BooksList';
import { BookDetails } from './pages/BookDetails';
import { TopRated } from './pages/TopRated';
import { ReviewersChoice } from './pages/ReviewersChoice';
import { QuickRead } from './pages/QuickRead';
import { Documentation } from './pages/Documentation';
import { SearchAuthor } from './pages/SearchAuthor';

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

          <Route path="/documentation">
            <Documentation />
          </Route>

          <Route path="/search">
            <SearchAuthor />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  )
};
