import React, { useEffect, useLayoutEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { css, Global } from '@emotion/react';
import ThemeProvider, { cssVar1, useTheme } from '@/contexts/ThemeContext';

interface Props {
  children?: React.ReactNode;
}

function DocsDarkThemeCompatImpl(props: Props) {
  const darkTheme = useDarkMode();
  const { setTheme } = useTheme();

  useLayoutEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('sb-addon-themes-3') ?? '');
      document.body.dataset.theme = data.current;
    } catch (e) {}
  }, []);
  useEffect(() => {
    setTheme(darkTheme ? 'dark' : 'light');
  }, [darkTheme, setTheme]);

  return <Global styles={styles} />;
}

function DocsDarkThemeCompat() {
  return (
    <ThemeProvider>
      <DocsDarkThemeCompatImpl />
    </ThemeProvider>
  );
}

const styles = css`
  .happy {
    background: var(--background-default) !important;
  }
  .sbdocs {
    background: var(--background-default) !important;
  }

  .os-content {
    background: white !important;
  }

  .prismjs {
    background: white !important;
  }
`;

export default DocsDarkThemeCompat;
