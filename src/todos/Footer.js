import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const FooterLink = ({ filter, name, onFilterChange }) => {
  const handleTodoClick = (e) => {
    e.preventDefault();
    onFilterChange(filter);
  };

  return (
    <a href="#"
      onClick={handleTodoClick}
    >
      {name}
    </a>
  );
};

const Footer = ({ visibilityFilter, onFilterChange }) => {
  const renderFilter = (filter, name) => {
    if (filter === visibilityFilter) {
      return <span>{name}</span>;
    }
    return (
      <FooterLink
        filter={filter}
        name={name}
        onFilterChange={onFilterChange}
      />
    );
  };

  return (
    <p>
      Show:
      {' '} {renderFilter('SHOW_ALL', 'All')}
      {' '} {renderFilter('SHOW_ACTIVE', 'Active')}
      {' '} {renderFilter('SHOW_COMPLETED', 'Completed')}
      <br />
      <Link to="/home">Back to homepage</Link>
    </p>
  );
};

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_ACTIVE',
    'SHOW_COMPLETED',
  ]).isRequired,
};

export default Footer;
