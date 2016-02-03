import React, { PropTypes } from 'react';

const AddTodo = ({ onAddClick }) => {
  let input;

  const handleClick = () => {
    onAddClick(input.value);
    input.value = '';
  };

  return (
    <div>
      <input ref={node => {
        input = node;
      }}
      />
      <button onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

export default AddTodo;
