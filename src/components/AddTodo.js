import React, { PropTypes } from 'react';

const AddTodo = ({ onAddClick }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }}
      />
      <button onClick={() => {
        onAddClick(input.value);
        input.value = '';
      }}
      >
        Add Todo
      </button>
    </div>
  );
};
AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

export default AddTodo;
