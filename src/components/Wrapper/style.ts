import { createGlobalStyle } from 'styled-components';
import { colorThemes, builtfontVariable } from 'theme';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
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
    }

    :root {
        ${builtfontVariable}
        ${colorThemes.light}
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
                background: #74fde0;
            }
        }
    }

    body[data-theme='dark'] {
        ${colorThemes.dark};
        background-color: var(--background);

        * {
            ::selection {
                background: #7270ff;
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
