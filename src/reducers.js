import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';
import { todos, visibilityFilter } from './todos/reducer';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  router,
});

export default todoApp;
