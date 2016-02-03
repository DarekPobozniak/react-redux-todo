import * as types from '../constants/ActionTypes';

export const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((prevValue, obj) => Math.max(obj.id, prevValue), -1) + 1,
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

export const visibilityFilter = (state = types.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
