import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../actions/addTodoAction';

const AddTodoInput = styled.input`
  border-radius: 10px;
  width: 500px;
  margin-top: 10px;
  height: 55px;
`;

const AddTodoButton = styled.button`
  position: absolute;
  border-radius: 35%;
  width: 60px;
  margin-top: 8px;
  margin-left: 60px;
  vertical-align: top;
  height: fit-content;
`;

function AddTodo({ dispatch }) {
  let input;

  return (
    //вынести в forms форму
    <div>
      <form
        onSubmit={(e) => {
          //вынести функцию
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }} //узнать,
      >
        <AddTodoInput ref={(node) => (input = node)} /> {/*узнать, что происходит и исправить} */}
        <AddTodoButton type="submit">+</AddTodoButton>
      </form>
    </div>
  );
}
//TODO
//добавить хуки  UseState UseRef

export default connect()(AddTodo);
