import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAuthors } from './actions';
import AuthorsList from './AuthorsList';
import './about.scss';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAuthors());
  }

  render() {
    const { authors } = this.props;
    return (
      <div className="about">
        <h2>About Page</h2>
        <AuthorsList authors={authors} />
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => (
  {
    authors: state.authors.items,
    isFetching: state.authors.isFetching,
  }
);

export default connect(mapStateToProps)(About);
