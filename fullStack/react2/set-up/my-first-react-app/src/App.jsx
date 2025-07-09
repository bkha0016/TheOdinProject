import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello, World!");
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  const changeMessage = () => {
    setMessage((prev) =>
      prev === "Hello, World!" ? "Welcome to React!" : "Hello, World!"
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>test</h1>
      <h1>{message}</h1> {/* Display the dynamic message */}
      <button
        onClick={changeMessage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click Me!
      </button>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </div>
  );
}

export default App;
