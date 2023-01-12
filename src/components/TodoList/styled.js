import styled from 'styled-components';
import { baseTheme } from '@styles/theme';

export const TodosListWrapper = styled.ul`
  position: relative;
  max-height: ${baseTheme.settings.todoList.height};
  width: ${baseTheme.settings.todoList.width};
  left: ${baseTheme.settings.todoList.left};
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: ${baseTheme.settings.todoList.scrollbar.width};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${baseTheme.colors.buttonsAndScroll};
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: ${baseTheme.settings.todoList.scrollbarTrack.boxShadow};
  }
`;
