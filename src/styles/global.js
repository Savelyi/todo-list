import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-size: ${baseTheme.typography.fontSize};//1.6rem;
  font-family: ${baseTheme.typography.fontFamily};//'Segoe UI';
  font-weight: ${baseTheme.typography.fontWeight};
}
`;
