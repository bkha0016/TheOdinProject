import { useState, useEffect } from "react";
import "./App.css";

function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}

function Testinput() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input onChange={handleInput} value={input}></input>
      <p>{input}</p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Clock />
      <Testinput />
    </>
  );
}

export default App;
