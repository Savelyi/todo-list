import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const TodoWrapper = styled.li`
  color: ${(props) =>
    props.completed ? `${baseTheme.colors.completed}` : `${baseTheme.colors.font}`};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

export const IsCompletedCheck = styled.input.attrs({ type: 'checkbox' })`
  height: ${baseTheme.settings.todoList.todo.height};
  width: ${baseTheme.settings.todoList.todo.width};
  left: ${baseTheme.settings.todoList.todo.left};
  margin-left: ${baseTheme.settings.todoList.todo.marginLeft};
  margin-top: ${baseTheme.settings.todoList.todo.marginTop};
  position: sticky;
`;
