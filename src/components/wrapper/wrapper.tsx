import React from 'react';
import { GlobalStyles, BaseGLobalStyles } from './wrapper.style';
import { Global } from '@emotion/react';
import { WePlanProvider } from '@contexts/index';
import { MainThemeProvider } from '@/theme/userThemeProvider';
interface WrapperProps {
  children: React.ReactNode;
}

export function WePlanWrapper({ children }: WrapperProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <WePlanProvider>
        <MainThemeProvider>{children}</MainThemeProvider>
      </WePlanProvider>
    </>
  );
}
