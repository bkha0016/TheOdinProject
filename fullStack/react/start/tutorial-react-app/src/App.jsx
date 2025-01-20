import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };
  return (
    <>
      <div className="App" style={{ backgroundColor }}></div>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
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

function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

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

const Bio = () => {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>

      <p className="summary">
        You can find my thoughts here.
        <br />
        <b>
          And <i>pictures</i>
        </b>{" "}
        of scientist!
      </p>
    </>
  );
};

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Newtodo = () => {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
};

const Animals = () => {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);
  return (
    <>
      <h1>Animals: </h1>
      <ul>{animalsList}</ul>
    </>
  );
};

export { App, Demo, Counter, TodoList, Bio, Newtodo, Animals };
