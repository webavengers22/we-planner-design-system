import Component from './Component';
import { WePlanWrapper } from './components/wrapper';

function App() {
  console.log('app');
  return (
    <>
      <WePlanWrapper>
        <Component />
      </WePlanWrapper>
    </>
  );
}

export default App;
