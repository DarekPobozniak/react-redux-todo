import * as types from '../constants/ActionTypes';

export const todos = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            id: state.items.reduce((prevValue, obj) => Math.max(obj.id, prevValue), -1) + 1,
            text: action.text,
            completed: false,
          },
        ],
      });
    case types.TOGGLE_TODO:
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, action.id),
          Object.assign({}, state.items[action.id], {
            completed: !state.items[action.id].completed,
          }),
          ...state.items.slice(action.id + 1),
        ],
      });
    case types.REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.todos,
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
