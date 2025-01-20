import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, Demo, Counter, TodoList, Bio, Newtodo, Animals } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Demo></Demo>
    <Counter></Counter>
    <TodoList></TodoList>
    <Bio></Bio>
    <Newtodo></Newtodo>
    <Animals></Animals>
  </StrictMode>
);
