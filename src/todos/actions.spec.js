import expect from 'expect';
import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('todo actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'First todo item';
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo', () => {
    const id = 0;
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id,
    };

    expect(actions.toggleTodo(0)).toEqual(expectedAction);
  });

  it('should create an action to change visibility filter', () => {
    const filter = 'SHOW_ALL';
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      filter,
    };

    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
  });
});
