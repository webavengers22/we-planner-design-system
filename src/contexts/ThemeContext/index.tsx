import React, { useContext, useMemo, createContext, useState, useEffect, useCallback } from 'react';
type SystemMode = 'light' | 'dark' | 'system';
type UserThemeMode = 'light' | 'dark';

export interface ThemeContextProps {
  colorTheme: SystemMode;
  nowColorTheme: UserThemeMode;
  setColorTheme: (theme: SystemMode) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  colorTheme: 'system',
  nowColorTheme: 'light',
  setColorTheme: () => null,
});

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorTheme] = useState<SystemMode>('system');
  const [nowColorTheme, setNowColorTheme] = useState<UserThemeMode>('light');

  useEffect(() => {
    const savedTheme = typeof window === 'undefined' ? 'light' : localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setColorTheme('dark');
      setNowColorTheme('dark');
      return;
    }

    if (savedTheme === 'light') {
      setColorTheme('light');
      setNowColorTheme('light');
      return;
    }

    const isUserDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColorTheme('light');
    setNowColorTheme(isUserDark ? 'dark' : 'light');
  }, []);
  const changeColorTheme = useCallback((theme: SystemMode) => {
    if (theme === 'system') {
      setColorTheme('system');
      setNowColorTheme(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      );
      document.querySelector('body')?.removeAttribute('data-theme');
      if (typeof window !== 'undefined') localStorage.removeItem('theme');
    } else if (theme === 'dark') {
      setColorTheme('dark');
      setNowColorTheme('dark');
      document.querySelector('body')?.setAttribute('data-theme', 'dark');
      if (typeof window !== 'undefined') localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      setColorTheme('light');
      setNowColorTheme('light');
      document.querySelector('body')?.setAttribute('data-theme', 'light');
      if (typeof window !== 'undefined') localStorage.setItem('theme', 'light');
    }
  }, []);
  const value = useMemo(
    () => ({
      setColorTheme: changeColorTheme,
      colorTheme,
      nowColorTheme,
    }),
    [changeColorTheme, colorTheme, nowColorTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useColorTheme = () => useContext(ThemeContext);
