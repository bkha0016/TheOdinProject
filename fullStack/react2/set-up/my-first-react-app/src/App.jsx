import React, { useState } from 'react'

function App() {
  const [message, setMessage] = useState("Hello, World!");

  const changeMessage = () => {
    setMessage((prev) =>
      prev === "Hello, World!" ? "Welcome to React!" : "Hello, World!"
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>  {/* Display the dynamic message */}
      <button 
        onClick={changeMessage} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer"
        }}
      >
        Click Me!
        
      </button>
    </div>
  );
}

export default App
