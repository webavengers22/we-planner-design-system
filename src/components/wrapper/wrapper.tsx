import React from 'react';
import { GlobalStyles } from './wrapper.style';
import { Global, ThemeProvider } from '@emotion/react';
import { WePlanProvider } from '@contexts/index';

interface wrapperProps {
  children: React.ReactElement; // Link 사용 컴포넌트 ex. \<WePlanWrapper initLink={Link}\>
  initLink?: React.ElementType<any>;
}
export function WePlanWrapper({ children, initLink }: wrapperProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <WePlanProvider initLink={initLink}>{children}</WePlanProvider>
    </>
  );
}
