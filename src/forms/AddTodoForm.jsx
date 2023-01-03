import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/addTodoAction';
import { AddTodoButton, AddTodoInput } from './styled';

function AddTodoForm() {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      return;
    }
    inputRef.current.value = '';
    dispatch(addTodo(todo));
  };

  return (
    <form
      onSubmit={(e) => {
        handleClick(e);
      }}>
      <AddTodoInput ref={inputRef} />
      <AddTodoButton
        type="submit"
        onClick={() => {
          setTodo(inputRef.current.value);
        }}>
        +
      </AddTodoButton>
    </form>
  );
}

export default AddTodoForm;
