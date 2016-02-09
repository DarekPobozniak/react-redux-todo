import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';

import '../styles.scss';

class TodoApp extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Link to="/todos">TodoApp</Link>
        {' '}
        <Link to="/home">Home</Link>
        {' '}
        <Link to="/about">About</Link>

        {children}
      </div>
    );
  }
}

TodoApp.propTypes = {
  children: PropTypes.element,
};

const mapStateToProps = () => (
  {
    routeActions,
  }
);

export default connect(
  mapStateToProps
)(TodoApp);
