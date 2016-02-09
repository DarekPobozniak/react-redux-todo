import React, { PropTypes } from 'react';

const Author = ({ name }) => (
  <li>{name}</li>
);

Author.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Author;
