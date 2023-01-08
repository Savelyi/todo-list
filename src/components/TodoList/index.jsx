import { toggleTodo } from '@actions/toggleTodo';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '@components/Todo';
import React from 'react';
import getVisibleTodos from '@helpers/getVisibleTodos';
import { TodosListWrapper } from './styled';

function TodoList() {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.filter.filter);
  const todosList = useSelector((state) => state.todos.todosList);

  const handleClick = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <TodosListWrapper>
      {getVisibleTodos(todosList, visibilityFilter).map((todo) => (
        <Todo key={todo.id} {...todo} onChange={() => handleClick(todo.id)} />
      ))}
    </TodosListWrapper>
  );
}

export default TodoList;
