import { RECEIVE_AUTHORS } from '../constants/ActionTypes';

function receiveAuthors(items) {
  return {
    type: RECEIVE_AUTHORS,
    items,
  };
}

export function fetchAuthors() {
  const url = 'http://www.mocky.io/v2/56b84b6f110000980149690c';

  return dispatch =>
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveAuthors(json)));
}
