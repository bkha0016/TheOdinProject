import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Food from "./List.jsx";
import Bio from "./Bio.jsx";
import TodoList from "./TodoList.jsx";
import Animal from "./Animals.jsx";
import { Todo } from "./Keys.jsx";
import Button from "./Button.jsx";

const MyComp = (props) => {
  return <div>Hello, {props.name}!</div>;
};

const handleButtonClick = (url) => {
  window.location.href = url;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <MyComp name="Timmies" />
    <Food />
    <App />
    <Bio />
    <TodoList />
    <Animal />
    <Todo />
    <Button text="Click Me!" color="blue" fontSize={12} />
    <Button text="Don't Click Me!" color="red" fontSize={12} />
    <Button text="Click Me!" color="blue" fontSize={20} />
    <Button
      handleClick={() => handleButtonClick("https://www.theodinproject.com")}
    />
  </StrictMode>
);
