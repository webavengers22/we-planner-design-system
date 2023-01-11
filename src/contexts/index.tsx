import React from 'react';
import { ThemeProvider } from '@contexts/ThemeContext';
import { LinkProvider } from '@contexts/linkContext';

export function WePlanProvider({
  children,
  initLink,
}: {
  children: React.ReactElement;
  initLink?: React.ElementType<any>;
}) {
  return (
    <ThemeProvider>
      <LinkProvider initLink={initLink}>{children}</LinkProvider>
    </ThemeProvider>
  );
}
