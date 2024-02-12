import React, { useRef } from 'react';
import ChildCom from './component/ChildCom';

const App = () => {
  const childRef = useRef();

  const getChildState = () => {
    const childState = childRef?.current?.getChildState();
    console.log('childState',childState);
  };

  return (
    <div>
      <ChildCom  ref={childRef} onButtonClick={getChildState} />
      {/* <button onClick={getChildState}>Get Child State</button> */}
    </div>
  );
};

export default App;
