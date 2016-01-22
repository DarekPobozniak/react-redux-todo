import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter } from '../actions';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import '../styles.scss';

const TodoApp = ({ dispatch, todos, visibilityFilter }) => (
  <div>
    <AddTodo
      onAddClick={text => dispatch(addTodo(text))}
    />
    <TodoList
      todos={todos}
      onTodoClick={id =>
        dispatch(toggleTodo(id))
      }
    />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterChange={filter =>
        dispatch(setVisibilityFilter(filter))
      }
    />
  </div>
);

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_ACTIVE',
    'SHOW_COMPLETED',
  ]).isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    ),
    visibilityFilter: state.visibilityFilter,
  };
};

export default connect(
  mapStateToProps
)(TodoApp);
