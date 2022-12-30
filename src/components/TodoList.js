import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import styled from 'styled-components'

const TodosListWrapper=styled.ul`
position:relative;
right:-5px;
max-height:350px;
width:990px;
overflow-x: auto;
&::-webkit-scrollbar{
  width: 7px;
  background-color: #f9f9fd;
}
&::-webkit-scrollbar-thumb {
    background-color: #223c50;
}
&::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: lightblue;
}
`

const TodoList = ({ todos, toggleTodo }) => (
  <TodosListWrapper>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </TodosListWrapper>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList