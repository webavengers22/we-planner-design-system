import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { LinkProvider } from '@/contexts/LinkProvider';
import { ColorTheme } from '@/types';

export function WePlanProvider({
  children,
  initLink,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: ColorTheme;
  initLink?: React.ElementType<any>;
}) {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <LinkProvider initLink={initLink}>{children}</LinkProvider>
    </ThemeProvider>
  );
}
