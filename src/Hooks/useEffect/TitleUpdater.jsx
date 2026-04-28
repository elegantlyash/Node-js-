import React, { useState, useEffect } from 'react';

const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only runs when `count` changes

  return (
    <div>
      <h1>{count} clicks</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default TitleUpdater;