import Component from './Component';
import { GlobalStyles } from '@/theme/GlobalStyle';
import { Global } from '@emotion/react';
import { WePlanWrapper } from './components/wrapper';

function App() {
  return (
    <>
      <WePlanWrapper>
        <Component />
      </WePlanWrapper>
    </>
  );
}

export default App;
