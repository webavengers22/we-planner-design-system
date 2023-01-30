import React from 'react';
import ThemeProvider, { Theme } from '@/contexts/ThemeContext';

interface Props {
  initialTheme?: Theme;
  children: React.ReactNode;
}

export function WePlanProvider({ children, initialTheme }: Props) {
  return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>;
}
