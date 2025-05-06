import React from "react";
import "../styles/Scoreboard.css";

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <p>Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}
