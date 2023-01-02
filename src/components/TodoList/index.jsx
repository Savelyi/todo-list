import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import { TodosListWrapper } from './styled';
import { VisibilityFilters } from '../../actions/VisibilityFilters';
import { toggleTodo } from '../../actions/toggleTodo';

function TodoList() {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.filter.filter);
  const todosList = useSelector((state) => state.todos.todosList);

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  return (
    <TodosListWrapper>
      {getVisibleTodos(todosList, visibilityFilter).map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
      ))}
    </TodosListWrapper>
  );
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   toggleTodo: PropTypes.func.isRequired
// };

export default TodoList;
