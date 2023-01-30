import React, {
  useEffect,
  useLayoutEffect,
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import { css, Global } from '@emotion/react';
import { ColorKey } from '@/styles/colors/type';
import { Theme } from '@/types';
import { themeCssColor } from '@/theme';

interface Props {
  children: React.ReactNode;
  initialTheme?: Theme;
}

// In browser -> useLayoutEffect
// In SSR -> useEffect
const useIsomorphicEffect = typeof window !== 'undefined' ? useEffect : useLayoutEffect;

const ThemeContext = createContext<{
  theme: Theme;
  isDarkTheme: boolean;
  setTheme: (theme: Theme) => void;
  toggle(): void;
} | null>(null);

function checkIsDarkTheme() {
  if (typeof window === 'undefined') return false;
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return systemPrefersDark;
}

export function ThemeProvider({ children, initialTheme = 'default' }: Props) {
  console.log(initialTheme);
  const [theme, setTheme] = useState<'light' | 'dark' | 'default'>(initialTheme);
  const [systemIsDark, setSystemIsDark] = useState(() => checkIsDarkTheme());

  useIsomorphicEffect(() => {
    if (theme === 'default') return;
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    console.log(initialTheme);
    const callback = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };

    const match = window.matchMedia('(prefers-color-scheme: dark)');
    match.addEventListener('change', callback);

    return () => {
      match.removeEventListener('change', callback);
    };
  }, []);

  const isDarkTheme = useMemo(() => {
    if (theme === 'dark') return true;
    if (systemIsDark && theme === 'default') return true;
    return false;
  }, [theme, systemIsDark]);

  const toggle = useCallback(() => {
    if (isDarkTheme) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkTheme, toggle }}>
      <Global styles={styles} />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return value;
}

export const cssVar = (key: ColorKey) => `var(--${key})`;
const lightTheme = css`
  --button-primary: #ff4500;
  --button-secondary: #ff4500;
  --button-tertiary: #a8a297;
  --background-default: #ffffff;
  --text-default: #15130e;
`;

const darkTheme = css`
  --button-primary: #ff4500;
  --button-secondary: #ff4500;
  --button-tertiary: #a8a297;
  --background-default: #4a453c;
  --text-default: #ffffff;
`;

const standard = css`
  --common-white: #ffffff;
  --common-black: #15130e;
  --orange-50: #feefe6;
  --orange-100: #ffe3da;
  --orange-200: #ffc7b4;
  --orange-300: #ff855b;
  --orange-400: #ff6c34;
  --orange-500: #ff4500;
  --orange-600: #e33400;
  --orange-700: #cc2200;
  --gray-100: #faf6ec;
  --gray-200: #f4efe3;
  --gray-300: #e9e3d7;
  --gray-400: #c6c1b5;
  --gray-500: #a8a297;
  --gray-600: #7e796e;
  --gray-700: #6a655a;
  --gray-800: #4a453c;
  --gray-900: #28241b;
  --teal-50: #e0f2f1;
  --teal-100: #82dfdb;
  --teal-200: #80cbc4;
  --teal-300: #4db6ac;
  --teal-400: #26a69a;
  --teal-500: #009688;
  --teal-600: #00796b;
  --teal-700: #00695c;
  --status-success: #109867;
  --status-info: #127cb3;
  --status-warning: #dc1b2c;
  --status-error: #dc1b2c;
`;

const styles = css`
  body {
    ${standard}
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
    }
  }

  body[data-theme='light'] {
    ${lightTheme};
  }

  body[data-theme='dark'] {
    ${darkTheme};
  }

  body {
    color: ${cssVar('text-default')};
  }
`;

export default ThemeProvider;
