import PropTypes from 'prop-types';
import { VisibilityFilters } from '../constants/VisibilityFilters';

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

getVisibleTodos.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
};

export default getVisibleTodos;
