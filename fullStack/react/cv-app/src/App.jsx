import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import EducationalExperience from "./components/EducationalExperience.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;
