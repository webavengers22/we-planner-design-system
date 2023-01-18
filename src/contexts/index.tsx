import React from 'react';
import ColorThemeProvider from '@/hooks/useColorTheme/colorThemeContext';
import { LinkContextProvider } from '@/contexts/linkContextProvider';

export function WePlanProvider({
  children,
  initLink,
}: {
  children: React.ReactElement;
  initLink?: React.ElementType<any>;
}) {
  return <ColorThemeProvider>{children}</ColorThemeProvider>;
}
