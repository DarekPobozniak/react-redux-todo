import React, { PropTypes } from 'react';

const Footer = ({ visibilityFilter, onFilterChange }) => {
  const renderFilter = (filter, name) => {
    if (filter === visibilityFilter) {
      return <span>{name}</span>;
    }
    return (
      <a href="#"
        onClick={e => {
          e.preventDefault();
          onFilterChange(filter);
        }}
      >
        {name}
      </a>
    );
  };

  return (
    <p>
      Show:
      {' '} {renderFilter('SHOW_ALL', 'All')}
      {' '} {renderFilter('SHOW_ACTIVE', 'Active')}
      {' '} {renderFilter('SHOW_COMPLETED', 'Completed')}
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
