import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistory } from 'react-router-redux';
import createHistory from 'history/lib/createHashHistory';
import reducer from './reducers';
import Routes from './routes';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const history = createHistory();
const reduxRouterMiddleware = syncHistory(history);

const store = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware, // neat middleware that logs actions
  reduxRouterMiddleware
)(createStore)(reducer);

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store);

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>,
  rootElement
);
