import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'red' : 'black'
        }}

    >
        {text}
        <input type="checkbox"
            checked={completed}
            onClick={onClick}
        >
        </input>


    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo