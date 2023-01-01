import React from 'react'
import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import { ToDoListWrapper } from './styled'


const App = () => (
  <ToDoListWrapper>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </ToDoListWrapper>
)

export default App