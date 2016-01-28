import * as types from './constants/ActionTypes';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action creators
 */
let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text,
  };
}

/* export function addTodo(text) {
  const url = 'http://www.mocky.io/v2/56a5d31d120000061fc610c5';

  return dispatch => {
    dispatch(addTodoOptimistic(text));

    return fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  };
}*/

export function toggleTodo(id) {
  return { type: types.TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}
