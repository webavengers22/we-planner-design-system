import React from 'react';
import ColorThemeProvider from '@/contexts/ThemeContext/colorThemeContext';
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
