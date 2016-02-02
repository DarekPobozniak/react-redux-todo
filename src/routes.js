import React from 'react';
import { Route } from 'react-router';

import App from './containers/App.js';
import Home from './components/Home';
import About from './components/About';

export default (
  <div>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </div>
);
