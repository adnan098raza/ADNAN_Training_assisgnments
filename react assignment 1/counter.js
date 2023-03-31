//code for the counter component

import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <center>
      <h1>Count: {count}</h1>
      <button class = "ab" onClick={() => setCount(count + 1)}>Increment</button>
      <br></br>
      <button class = "bc" onClick={() => setCount(count - 1)}>Decrement</button>
      </center>
    </div>
  );
}

export default Counter;
