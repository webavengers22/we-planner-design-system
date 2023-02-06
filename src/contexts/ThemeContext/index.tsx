import React, { useContext, useMemo, createContext, useState, useEffect, useCallback } from 'react';
type Theme = 'light' | 'dark' | 'system';
type SelectTheme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: Theme;
  selectTheme: SelectTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'system',
  selectTheme: 'light',
  setTheme: () => null,
});

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [selectTheme, setSelectTheme] = useState<SelectTheme>('light');

  useEffect(() => {
    const savedTheme = typeof window === 'undefined' ? 'light' : localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setTheme('dark');
      setSelectTheme('dark');
      return;
    }

    if (savedTheme === 'light') {
      setTheme('light');
      setSelectTheme('light');
      return;
    }

    const isUserDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme('light');
    setSelectTheme(isUserDark ? 'dark' : 'light');
  }, []);
  const changeColorTheme = useCallback((theme: Theme) => {
    if (theme === 'system') {
      setTheme('system');
      setSelectTheme(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      );
      document.querySelector('body')?.removeAttribute('data-theme');
      if (typeof window !== 'undefined') localStorage.removeItem('theme');
    } else if (theme === 'dark') {
      setTheme('dark');
      setSelectTheme('dark');
      document.querySelector('body')?.setAttribute('data-theme', 'dark');
      if (typeof window !== 'undefined') localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      setTheme('light');
      setSelectTheme('light');
      document.querySelector('body')?.setAttribute('data-theme', 'light');
      if (typeof window !== 'undefined') localStorage.setItem('theme', 'light');
    }
  }, []);
  const value = useMemo(
    () => ({
      setTheme: changeColorTheme,
      theme,
      selectTheme,
    }),
    [changeColorTheme, theme, selectTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useColorTheme = () => useContext(ThemeContext);
