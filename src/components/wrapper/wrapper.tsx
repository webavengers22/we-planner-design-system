import React from 'react';
import { GlobalStyles, BaseGLobalStyles } from './wrapper.style';
import { Global } from '@emotion/react';
import { WePlanProvider } from '@contexts/index';
interface WrapperProps {
  children: React.ReactElement;
  initLink?: React.ElementType<any>;
}

export function WePlanWrapper({ children, initLink }: WrapperProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <WePlanProvider initLink={initLink}>{children}</WePlanProvider>
    </>
  );
}
