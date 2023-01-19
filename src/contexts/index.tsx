import React from 'react';
import ThemeColorProvider from '@/contexts/ThemeContext';

console.log('WePlanProvider');
export function WePlanProvider({
  children,
  initLink,
}: {
  children: React.ReactElement;
  initLink?: React.ElementType<any>;
}) {
  return <ThemeColorProvider>{children}</ThemeColorProvider>;
}
