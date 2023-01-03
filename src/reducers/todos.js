const defaultState = {
  todosList: []
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(`action id add - ${action.id}`);
      return {
        ...state,
        todosList: [
          ...state.todosList,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      console.log(`action id toggle - ${action.id}`);
      return {
        ...state,
        todosList: state.todosList.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
};

export default todos;
