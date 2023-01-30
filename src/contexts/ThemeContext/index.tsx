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
import { themes, themeCssColor } from '@/theme';
import { ColorObjectList } from '@/styles/colors/type';
export type Theme = 'light' | 'dark' | 'default';

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
  const [theme, setTheme] = useState<'light' | 'dark' | 'default'>(initialTheme);
  const [systemIsDark, setSystemIsDark] = useState(() => checkIsDarkTheme());

  useIsomorphicEffect(() => {
    if (theme === 'default') return;
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
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

export const cssVar1 = (key: ColorObjectList) => `var(--${key})`;

const styles = css`
  body {
    ${themeCssColor.standard}
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${themeCssColor.dark};
    }
  }

  body[data-theme='light'] {
    ${themeCssColor.light};
  }

  body[data-theme='dark'] {
    ${themeCssColor.dark};
  }
`;

export default ThemeProvider;
