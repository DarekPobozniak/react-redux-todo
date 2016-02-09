import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';
import { todos, visibilityFilter } from './todos/reducer';
import { authors } from './about/reducer';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  router,
  authors,
});

export default todoApp;
