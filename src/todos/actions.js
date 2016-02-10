import * as types from '../constants/ActionTypes';
import { Fetch } from '../helpers';

/*
 * action creators
 */
export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text,
  };
}

function requestTodos() {
  return {
    type: types.REQUEST_TODOS,
  };
}

function receiveTodos(todos) {
  return {
    type: types.RECEIVE_TODOS,
    todos,
  };
}


export function fetchTodos() {
  const url = 'http://www.mocky.io/v2/56b52a6d0f00007c2987563c';

  return dispatch => {
    dispatch(requestTodos());

    return fetch(url)
      .then(Fetch.checkStatus)
      .then(Fetch.parseJSON)
      .then(json => dispatch(receiveTodos(json)))
      .catch(error => debug.error(error));
  };
}

export function toggleTodo(id) {
  return { type: types.TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}
