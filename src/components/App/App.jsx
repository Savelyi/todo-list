import React from 'react';
import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import { ToDoListWrapper } from './styled';

function App() {
  return (
    <ToDoListWrapper>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </ToDoListWrapper>
  );
}

export default App;
