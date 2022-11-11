import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

html {
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 16px;
}

body {
  font-family: 'Noto Sans KR', sans-serif !important;
  color: $primary;
}

h1 {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button,
input,
select,
textarea {
  background-color: transparent;
  border: 0;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

a,
button {
  cursor: pointer;
}

button {
  padding: 0;
}

ul,
ol {
  padding-left: 0;
  list-style: none;
}
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`;
export default GlobalStyle;
