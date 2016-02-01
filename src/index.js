import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import createHistory from 'history/lib/createHashHistory';
import App from './containers/App.js';
import todoApp from './reducers';
import Home from './components/Home';
import About from './components/About';
// import Routes from './routes';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const history = createHistory();
const reduxRouterMiddleware = syncHistory(history);

const store = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware, // neat middleware that logs actions
  reduxRouterMiddleware
)(createStore)(todoApp);

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store);

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  rootElement
);
