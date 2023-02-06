import React from 'react';
import { ThemeProvider } from '@emotion/react';
import StorybookThemeWrapper from './StorybookThemeWrapper';
import { themes } from '.';

export function MainThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={themes}>
      <StorybookThemeWrapper>{children}</StorybookThemeWrapper>
    </ThemeProvider>
  );
}
