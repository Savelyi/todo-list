import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styled from 'styled-components'

const ToDoListWrapper = styled.div`
position:absolute;
top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
border-radius:30px;
height: 500px;
width:1000px;
background: lightblue;
flex-direction: column;
display: flex;
align-items: center;
justify-content: flex-start;
`

const App = () => (
  <ToDoListWrapper>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </ToDoListWrapper>
)

export default App