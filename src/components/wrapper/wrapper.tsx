import React from 'react';
import ThemeProvider, { ThemeProviderProps } from 'providers/ThemeProvider';
import { GlobalStyles } from './wrapper.style';

interface WePlanWrapperProps {
  children: React.ReactElement; // Link 사용 컴포넌트 ex. \<WePlanWrapper initLink={Link}\>
  initLink?: React.ElementType<any>;
}

/**
 * weplanner의 Provider
 */
export function WePlanWrapper({ children }: ThemeProviderProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
