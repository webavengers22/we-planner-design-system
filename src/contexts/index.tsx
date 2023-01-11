import React from 'react';
import { ThemeContextProvider } from '@/contexts/themeContext';
import { LinkContextProvider } from '@/contexts/linkContextProvider';

export function WePlanProvider({
  children,
  initLink,
}: {
  children: React.ReactElement;
  initLink?: React.ElementType<any>;
}) {
  return (
    <ThemeContextProvider>
      <LinkContextProvider initLink={initLink}>{children}</LinkContextProvider>
    </ThemeContextProvider>
  );
}
