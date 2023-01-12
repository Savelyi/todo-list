import ReactSelect from 'react-select';
import styled from 'styled-components';
import { baseTheme } from '@styles/theme';

export const ReactSelectElement = styled(ReactSelect)`
  width: ${baseTheme.settings.footer.localize.width};
  height: ${baseTheme.settings.footer.localize.height};
  left: ${baseTheme.settings.footer.localize.left};
`;
