import React from 'react';
import AddTodo from '@components/AddTodo';
import Footer from '@components/Footer';
import TodoList from '@components/TodoList';
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
