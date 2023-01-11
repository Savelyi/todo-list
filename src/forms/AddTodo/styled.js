import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const AddTodoInput = styled.input`
  border-radius: ${baseTheme.settings.addTodo.borderRaidus};
  width: ${baseTheme.settings.addTodo.addTodoInput.width};
  margin-top: ${baseTheme.settings.addTodo.marginTop};
  height: ${baseTheme.settings.addTodo.height};
`;

export const AddTodoButton = styled.button`
  position: absolute;
  border-radius: ${baseTheme.settings.addTodo.borderRaidus};
  width: ${baseTheme.settings.addTodo.addTodoButton.width};
  height: ${baseTheme.settings.addTodo.height};
  background-color: ${baseTheme.colors.buttonsAndScroll};
  margin-top: ${baseTheme.settings.addTodo.marginTop};
  margin-left: ${baseTheme.settings.addTodo.addTodoButton.marginLeft};
`;
