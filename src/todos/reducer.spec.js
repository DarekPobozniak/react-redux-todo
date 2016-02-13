import expect from 'expect';
import { todos, visibilityFilter } from './reducer';
import * as types from '../constants/ActionTypes';

describe('todo reducer', () => {
  it('should return initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual({
      isFetching: false,
      items: [],
    });
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos(
        {
          isFetching: false,
          items: [],
        }, {
          type: types.ADD_TODO,
          text: 'Run the tests',
        }
      )
    ).toEqual({
      isFetching: false,
      items: [
        {
          id: 0,
          text: 'Run the tests',
          completed: false,
        },
      ],
    });

    expect(
      todos(
        {
          isFetching: false,
          items: [
            {
              id: 0,
              text: 'First todo',
              completed: false,
            },
          ],
        }, {
          type: types.ADD_TODO,
          text: 'Run the tests',
        }
      )
    ).toEqual(
      {
        isFetching: false,
        items: [
          {
            id: 0,
            text: 'First todo',
            completed: false,
          },
          {
            id: 1,
            text: 'Run the tests',
            completed: false,
          },
        ],
      }
    );
  });

  it('should handle TOGGLE_TODO', () => {
    const stateBefore = {
      isFetching: false,
      items: [
        {
          id: 0,
          text: 'First todo',
          completed: false,
        },
        {
          id: 1,
          text: 'Run the tests',
          completed: false,
        },
      ],
    };

    const expectedState = {
      isFetching: false,
      items: [
        {
          id: 0,
          text: 'First todo',
          completed: false,
        },
        {
          id: 1,
          text: 'Run the tests',
          completed: true,
        },
      ],
    };

    expect(
      todos(stateBefore, {
        type: types.TOGGLE_TODO,
        id: 1,
      })
    ).toEqual(expectedState);
  });
});

describe('visibilityFilter reducer', () => {
  it('should return initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual(types.VisibilityFilters.SHOW_ALL);
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter(types.VisibilityFilters.SHOW_COMPLETED, {
        type: types.SET_VISIBILITY_FILTER,
        filter: types.VisibilityFilters.SHOW_ACTIVE,
      })
    ).toEqual(types.VisibilityFilters.SHOW_ACTIVE);
  });
});
