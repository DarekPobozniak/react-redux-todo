import { RECEIVE_AUTHORS } from '../constants/ActionTypes';
import { Fetch } from '../helpers';

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
      .then(Fetch.checkStatus)
      .then(Fetch.parseJSON)
      .then(json => dispatch(receiveAuthors(json)))
      .catch(error => debug.error(error));
}
