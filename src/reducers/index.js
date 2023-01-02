import { combineReducers } from 'redux';
import todosList from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos: todosList,
  filter: visibilityFilter
});
