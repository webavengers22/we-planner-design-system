import React, { useMemo } from 'react';
import { ThemeProvider as ThemeProviderStyled } from '@emotion/react';
import { useColorTheme } from '@/contexts/themeContext';
export function userThemeProvider({ children }: { children: React.ReactNode }) {
  const { nowColorTheme } = useColorTheme();
  const theme = {
    theme: nowColorTheme,
  };
  //  const theme = useMemo(() => getAppTheme(nowColorTheme ? 'dark' : 'light'), [nowColorTheme]);
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
}
