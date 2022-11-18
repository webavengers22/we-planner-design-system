import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colorThemes, builtfontVariable } from 'theme';
import 'assets/fonts/css/pretendard.css';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
    }
    html {
      font-family: Pretendard, sans-serif !important;
    }

    body {
      font-family: Pretendard, sans-serif !important;
    }

    :root {
        ${builtfontVariable}
        ${colorThemes.common}
        transition: 0.125s all ease-in;
        scroll-padding-top: 64px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        touch-action: manipulation;
    }

    @media (prefers-color-scheme: dark) {
        body {
            ${colorThemes.dark};
            background-color: var(--background);
        }
    }

    body[data-theme='light'] {
        ${colorThemes.light};
        background-color: var(--background);

        * {
            ::selection {
               // background: #74fde0;
            }
        }
    }

    body[data-theme='dark'] {
        ${colorThemes.dark};
        background-color: var(--background);

        * {
            ::selection {
               // background: #7270ff;
            }
        }
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
