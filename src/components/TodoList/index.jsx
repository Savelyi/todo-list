import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import { TodosListWrapper } from './styled';
import { toggleTodo } from '../../actions/toggleTodo';
import getVisibleTodos from '../../helpers/getVisibleTodos';

function TodoList() {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.filter.filter);
  const todosList = useSelector((state) => state.todos.todosList);
  return (
    <TodosListWrapper>
      {getVisibleTodos(todosList, visibilityFilter).map((todo) => (
        <Todo key={todo.id} {...todo} onChange={() => dispatch(toggleTodo(todo.id))} />
      ))}
    </TodosListWrapper>
  );
}

export default TodoList;
