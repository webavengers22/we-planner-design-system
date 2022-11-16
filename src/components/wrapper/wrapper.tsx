import React from 'react';
import { WePlannerProvider } from '../../context';
import { GlobalStyles } from './style';

interface WePlanWrapperProps {
  children: React.ReactElement; // Link 사용 컴포넌트 ex. \<WePlanWrapper initLink={Link}\>
  initLink?: React.ElementType<any>;
}

/**
 * weplanner의 Provider
 */
export function WePlanWrapper({ children, initLink }: WePlanWrapperProps) {
  return (
    <>
      <GlobalStyles />
      <WePlannerProvider initLink={initLink}>{children}</WePlannerProvider>
    </>
  );
}
