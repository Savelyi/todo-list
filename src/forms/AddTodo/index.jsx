import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@actions/addTodoAction';
import { AddTodoButton, AddTodoInput } from './styled';

function AddTodoForm() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (todo.trim() === '') {
      return;
    }
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleClick}>
      <AddTodoInput value={todo} onChange={handleChange} />
      <AddTodoButton type="submit">+</AddTodoButton>
    </form>
  );
}

export default AddTodoForm;
