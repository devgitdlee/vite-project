import React, { useState,useEffect  } from 'react';
function addbutton( props ) {

  const [count, setCount] = useState(1);


  return (
    <div>
        count: {count}
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
    </div>
  );
}

export default addbutton;
