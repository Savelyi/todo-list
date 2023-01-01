import React from 'react';
import PropTypes from 'prop-types';
import { TodoWrapper, IsCompletedCheck } from './styled';

function Todo({ onClick, completed, text }) {
  return (
    <TodoWrapper completed={completed}>
      {text}
      <IsCompletedCheck checked={completed} onClick={onClick} />
    </TodoWrapper>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
