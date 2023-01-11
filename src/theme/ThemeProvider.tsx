import { FC, useEffect, useMemo, forwardRef } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { useColorTheme } from '@contexts/ThemeContext';
import { getAppTheme } from '.';
import { WePlanWrapper } from '@components/wrapper';

const ThemeDefault: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const isDarkMode = useDarkMode();
  const { setColorTheme } = useColorTheme();

  const theme = useMemo(() => getAppTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);
  useEffect(() => {
    setColorTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};

const Link = forwardRef((props: { to: string; children: React.ReactElement } & any, ref) => {
  return (
    <a ref={ref} href={props.to} {...props}>
      {props.children}
    </a>
  );
});

export const Theme: FC<{ children: React.ReactElement }> = ({ children }) => {
  const isDarkMode = useDarkMode();
  const { setColorTheme } = useColorTheme();

  const theme = useMemo(() => getAppTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);
  useEffect(() => {
    setColorTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};
