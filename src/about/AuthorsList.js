import React, { PropTypes } from 'react';
import Author from './Author';

const AuthorList = ({ authors }) => (
  <div>
    <h2>List</h2>
    <ul>
      {authors.map((author, index) =>
        <Author
          key={index}
          name={author}
        />
      )}
    </ul>
  </div>
);

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default AuthorList;
