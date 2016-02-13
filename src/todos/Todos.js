import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import { addTodo, toggleTodo, setVisibilityFilter, fetchTodosIfNeeded } from '../todos/actions';

import AddTodo from '../todos/AddTodo';
import TodoList from '../todos/TodoList';
import Footer from '../todos/Footer';

import '../styles.scss';

class Todos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodosIfNeeded());
  }

  handleAddTodoClick = (text) => {
    const { dispatch } = this.props;
    dispatch(addTodo(text));
  };

  handleTodoClick = (id) => {
    const { dispatch } = this.props;
    dispatch(toggleTodo(id));
  };

  handleFooterLinkClick = (filter) => {
    const { dispatch } = this.props;
    dispatch(setVisibilityFilter(filter));
  };

  handleRedirect = () => {
    const { dispatch } = this.props;
    dispatch(routeActions.push('/home'));
  };

  render() {
    const { todos, visibilityFilter } = this.props;

    return (
      <div>
        <h1>Todos</h1>

        <AddTodo
          onAddClick={this.handleAddTodoClick}
        />
        <TodoList
          todos={todos}
          onTodoClick={this.handleTodoClick}
        />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterChange={this.handleFooterLinkClick}
        />
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_ACTIVE',
    'SHOW_COMPLETED',
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
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
      state.todos.items,
      state.visibilityFilter
    ),
    visibilityFilter: state.visibilityFilter,
  }
);

export default connect(
  mapStateToProps
)(Todos);
