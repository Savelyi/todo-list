import React from 'react'
import PropTypes from 'prop-types'
import { TodoWrapper,IsCompletedCheck } from './styled'

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