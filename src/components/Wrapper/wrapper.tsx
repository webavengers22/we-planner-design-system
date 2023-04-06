import React from 'react';
import { GlobalStyles } from './styles';
import { Global } from '@emotion/react';
import { WePlanProvider } from '@contexts/index';
import { ColorTheme } from '@/types';
interface WrapperProps {
  children: React.ReactNode;
  initLink?: React.ElementType<any>;
  initialTheme?: ColorTheme;
}

export function WePlanWrapper({
  children,
  initLink = 'a',
  initialTheme = 'default',
}: WrapperProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <WePlanProvider initLink={initLink} initialTheme={initialTheme}>
        {children}
      </WePlanProvider>
    </>
  );
}
