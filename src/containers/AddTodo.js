import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodoAction'
import styled from 'styled-components';



const AddTodoInput = styled.input`
border-radius: 10px;
width: 500px;
margin-top: 10px;
height: 55px;
`

const AddTodoButton = styled.button`
position:absolute;
border-radius: 35%;
width: 60px;
margin-top: 8px;
margin-left:60px;
vertical-align:top;
height: fit-content;
`


const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <AddTodoInput ref={node => (input = node)} />
        <AddTodoButton type="submit">+</AddTodoButton>
      </form>
    </div>
  )
}

export default connect()(AddTodo)