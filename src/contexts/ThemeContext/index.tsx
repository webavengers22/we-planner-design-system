import React, { useMemo, createContext, useState, useEffect, useCallback, useContext } from 'react';

type UserTheme = 'light' | 'dark' | 'system';
type ActiveTheme = 'light' | 'dark';

interface ThemeContextProps {
  children: JSX.Element;
}

interface ThemeContextProviderProps {
  /**사용자가 선택한 테마 값 */
  userTheme: UserTheme;
  /** 실제 화면에 표시된 테마 값 */
  //  activeTheme: ActiveTheme;
  /** 테마 값 재정의 함수*/
  setTheme: (theme: UserTheme) => void;
}

const ThemeContext = createContext<ThemeContextProviderProps>({
  userTheme: 'system',
  //  activeTheme: 'light',
  setTheme: () => null,
});

/** 실제 화면에 표시된 테마 값 가져오는 합수 */
function getActiveTheme(theme: UserTheme): ActiveTheme {
  return theme !== 'system'
    ? theme
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export default function ThemeColorProvider({ children }: ThemeContextProps): JSX.Element {
  /**사용자가 선택한 테마 상태 값 */
  const [userTheme, setUserTheme] = useState<UserTheme>('system');
  /** 실제 화면에 표시된 테마 상태값 */
  const [activeTheme, setActiveTheme] = useState<ActiveTheme>('light');

  useEffect(() => {
    console.log('localStorage');
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'system' || savedTheme === 'light' || savedTheme === 'dark') {
      setUserTheme(savedTheme);
    } else {
      savedTheme = userTheme;
    }
    setActiveTheme(getActiveTheme(savedTheme as UserTheme));
  }, []);

  function toggleTheme(prevTheme: ActiveTheme) {
    setUserTheme(prevTheme);
    setActiveTheme(prevTheme);

    document.querySelector('body')?.setAttribute('data-theme', prevTheme);
    if (typeof window !== 'undefined') localStorage.setItem('theme', prevTheme);
  }

  const changeColorTheme = useCallback((theme: UserTheme) => {
    document.querySelector('body')?.removeAttribute('data-theme');

    if (theme !== 'system' && theme !== 'light' && theme !== 'dark') {
      setUserTheme('system');
      setActiveTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      if (typeof window !== 'undefined') localStorage.removeItem('theme');
    } else {
      toggleTheme(getActiveTheme(theme));
    }
  }, []);

  const value = useMemo(
    () => ({
      setTheme: changeColorTheme,
      userTheme,
    }),
    [changeColorTheme, userTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useColorTheme = () => useContext(ThemeContext);
