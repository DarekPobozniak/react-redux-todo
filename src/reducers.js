import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';
import * as types from './constants/ActionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case types.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, {
          completed: !todo.completed,
        });
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = types.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  router,
});

export default todoApp;
