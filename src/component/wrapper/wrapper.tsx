import React from 'react';
import { GlobalStyles, BaseGLobalStyles } from './wrapper.style';
import { Global } from '@emotion/react';
import { WePlanProvider } from '@contexts/index';
import { MainThemeProvider } from '@/theme/userThemeProvider';
interface WrapperProps {
  children: React.ReactNode;
  initLink?: React.ElementType<any>;
  applyDefaultStyle?: boolean;
}

export function WePlanWrapper({
  children,
  initLink = 'a',
  applyDefaultStyle = true,
}: WrapperProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <WePlanProvider initLink={initLink}>
        <MainThemeProvider>{children}</MainThemeProvider>
      </WePlanProvider>
    </>
  );
}
