import React, { useEffect, useLayoutEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { css, Global } from '@emotion/react';
import ThemeProvider, { cssVar, useTheme } from '../../contexts/ThemeProvider';
import { WePlanProvider } from '@contexts/WePlanProvider';

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
  .sbdocs {
    background: var(--background-default) !important;
    color: var(--text-default) !important;
    p code {
      background: ${cssVar('gray-400')};
      color: ${cssVar('text-default')};
      border-color: ${cssVar('orange-500')};
    }
  }

  .os-content {
    background: white !important;
  }

  .prismjs {
    background: white !important;
  }
`;

export default DocsDarkThemeCompat;
