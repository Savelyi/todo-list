import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TodoWrapper=styled.li`
color: ${props => props.completed ? 'red' : 'black'};
text-decoration: ${props=>props.completed ? 'line-through' : 'none'};
`

const IsCompletedCheck=styled.input.attrs({type:'checkbox'})`
  height: 63px;
  margin-left: 10px;
  position: absolute;
  width: 30px;
`

const Todo = ({ onClick, completed, text }) => (
    <TodoWrapper completed={completed}>
        {text}
        <IsCompletedCheck 
            checked={completed}
            onClick={onClick}
        >
        </IsCompletedCheck>


    </TodoWrapper>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo