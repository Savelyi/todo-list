import React from 'react';
import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import TodoList from '../TodoList/index';
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
