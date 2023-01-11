import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const LinkButton = styled.button`
  border-radius: ${baseTheme.settings.footer.filterLink.borderRadius};
  width: fit-content;
  min-width: ${baseTheme.settings.footer.filterLink.width};
  margin-left: ${baseTheme.settings.footer.filterLink.marginLeft};
  height: ${baseTheme.settings.footer.filterLink.height};
  background-color: ${baseTheme.colors.buttonsAndScroll};
`;
