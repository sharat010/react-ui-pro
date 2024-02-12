import React, { useImperativeHandle, useRef, useState } from 'react';

const ChildCom = React.forwardRef(({ onButtonClick }, ref) => {
  const [childState, setChildState] = useState(0);

  const handleButtonClick = () => {
    setChildState((prevChildState) => prevChildState + 1);
  };

  useImperativeHandle(ref, () => ({
    getChildState: () => childState,
  }));

  return (
    <div>
      <p>Child State: {childState}</p>
      <button className='btn btn-primary' onClick={() => { handleButtonClick(); onButtonClick(); }}>Update Child State</button>
    </div>
  );
});

export default React.memo(ChildCom);
