import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useColorTheme } from '@/contexts/themeContext';

export function MainThemeProvider({ children }: { children: React.ReactNode }) {
  const { nowColorTheme } = useColorTheme();

  const theme = {
    theme: nowColorTheme,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
