// @flow

// #region imports
import { injectGlobal } from 'styled-components';
// #endregion

const injectGlobalStyle = () => injectGlobal`
  html, body {
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  #main {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default injectGlobalStyle;
