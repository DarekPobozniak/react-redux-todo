import { RECEIVE_AUTHORS } from '../constants/ActionTypes';

export const authors = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case RECEIVE_AUTHORS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    default:
      return state;
  }
};
