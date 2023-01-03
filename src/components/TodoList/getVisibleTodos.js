import { VisibilityFilters } from '../../actions/VisibilityFilters';

//console.log('asdasdasdasd');
//console.log(useSelector((state) => state.filter.filter));
//   console.log(useSelector((state) => state.todos.todosList).length);

const getVisibleTodos = (todos, filter) => {
  // console.log(`in method length - ${todos.length}`);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      console.log(`SHOW_ALL length ${todos?.length}`);
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      console.log(`SHOW_COMPLETED length - ${todos?.filter((t) => t.completed).length}`);
      return todos?.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      console.log(`SHOW_ACTIVE length - ${todos?.filter((t) => !t.completed).length}`);
      return todos?.filter((t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

export default getVisibleTodos;
