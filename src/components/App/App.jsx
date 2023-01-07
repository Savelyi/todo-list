import React from 'react';
import Footer from '../Footer';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import { ToDoListWrapper } from './styled';

function App() {
  return (
    <ToDoListWrapper>
      <AddTodo />
      <TodoList />
      <Footer />
    </ToDoListWrapper>
  );
}

export default App;
