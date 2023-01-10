import React from 'react';
import { GlobalStyles } from './wrapper.style';
import { ColorThemeProvider } from '@src/context/colorThemeContext';
import { ChildrenProps } from '@src/types/ComponentProps';

interface WePlanWrapperProps {
  children: React.ReactElement; // Link 사용 컴포넌트 ex. \<WePlanWrapper initLink={Link}\>
  initLink?: React.ElementType<any>;
}

/**
 * weplanner의 Provider
 */
export function WePlanWrapper({ children }: ChildrenProps) {
  return (
    <>
      <GlobalStyles />
      <ColorThemeProvider>{children}</ColorThemeProvider>
    </>
  );
}
