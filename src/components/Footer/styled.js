import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const FooterWrapper = styled.div`
  position: absolute;
  display: inline-block;
  width: ${baseTheme.settings.app.width};
  height: ${baseTheme.settings.footer.height};
  text-align: ${baseTheme.media.position};
  top: ${baseTheme.settings.footer.posTop};
  left: ${baseTheme.settings.footer.posLeft};
`;
export const ShowSpan = styled.span``;
