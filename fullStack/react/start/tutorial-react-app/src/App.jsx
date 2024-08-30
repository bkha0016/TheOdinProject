import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
    </>
  );
}

const Demo = () => {
  const [change, setChange] = useState(false);
  return (
    <div>
      <button onClick={() => setChange(!change)}>Click Here!</button>
      {change ? (
        <h1>Welcome to GeeksforGeeks</h1>
      ) : (
        <h1>A Computer Science Portal for Geeks</h1>
      )}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state with 0

  const increment = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
};

// const Timer = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     // Cleanup function to clear the interval
//     return () => clearInterval(interval);
//   }, []); // Empty array means this effect runs only once

//   return <div>Count: {count}</div>;
// };

export { App, Demo, Counter };
