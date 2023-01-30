import { Global, css } from '@emotion/react';
import { cssVar } from '@/contexts';

export function GlobalStyles() {
  return <Global styles={styles} />;
}

const styles = css`
  body {
    box-sizing: border-box;
    background: ${cssVar('background-default')};
  }
  * {
    box-sizing: inherit;
  }
`;
