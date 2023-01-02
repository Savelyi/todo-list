import React from 'react';
import PropTypes from 'prop-types';
import { TodoWrapper, IsCompletedCheck } from './styled';

function Todo({ onChange, completed, text }) {
  return (
    <TodoWrapper completed={completed}>
      {text}
      <IsCompletedCheck checked={completed} onChange={onChange} />
    </TodoWrapper>
  );
}

Todo.propTypes = {
  onChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
