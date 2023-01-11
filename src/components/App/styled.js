import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const ToDoListWrapper = styled.div`
  position: absolute;
  top: ${baseTheme.settings.app.posCenter};
  left: ${baseTheme.settings.app.posCenter};
  border-radius: ${baseTheme.settings.app.borderRadius};
  height: ${baseTheme.settings.app.height};
  width: ${baseTheme.settings.app.width};
  background: ${baseTheme.colors.primary};
  transform: translate(-50%, -50%);
  flex-direction: column;
  display: flex;
  align-items: ${baseTheme.media.position};
  justify-content: flex-start;
`;
