import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';

import { addTodo, toggleTodo, setVisibilityFilter } from '../actions';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import '../styles.scss';

const TodoApp = ({ dispatch, todos, visibilityFilter, children }) => {
  const handleAddTodoClick = text => dispatch(addTodo(text));
  const handleTodoClick = id => dispatch(toggleTodo(id));
  const handleFooterLinkClick = filter => dispatch(setVisibilityFilter(filter));

  return (
    <div>
      <Link to="/home">Home</Link>{' '}<Link to="/about">About</Link>

      {children}
      <AddTodo
        onAddClick={handleAddTodoClick}
      />
      <TodoList
        todos={todos}
        onTodoClick={handleTodoClick}
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterChange={handleFooterLinkClick}
      />
    </div>
  );
};

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

const mapStateToProps = (state) => (
  {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    ),
    visibilityFilter: state.visibilityFilter,
    routeActions,
  }
);

export default connect(
  mapStateToProps
)(TodoApp);
