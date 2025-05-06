import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import "./styles/App.css";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([
    { school: "", title: "", date: "" },
  ]);

  const [experience, setExperience] = useState([
    { company: "", position: "", responsibilities: "", from: "", until: "" },
  ]);

  return (
    <div className="app">
      <h1>Create Your CV</h1>

      {/* General Info Section */}
      <GeneralInfo
        data={generalInfo}
        onChange={(updatedData) => setGeneralInfo(updatedData)}
      />

      {/* Educational Experience Section */}
      <EducationalExperience
        data={education}
        onChange={(updatedData) => setEducation(updatedData)}
      />

      {/* Practical Experience Section */}
      <PracticalExperience
        data={experience}
        onChange={(updatedData) => setExperience(updatedData)}
      />

      {/* Preview Section */}
      <div className="preview">
        <h2>Preview of Your CV</h2>
        <p>
          <strong>Name:</strong> {generalInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {generalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {generalInfo.phone}
        </p>

        <h3>Education</h3>
        {education.map((entry, index) => (
          <div key={index}>
            <p>
              <strong>School:</strong> {entry.school}
            </p>
            <p>
              <strong>Title:</strong> {entry.title}
            </p>
            <p>
              <strong>Date:</strong> {entry.date}
            </p>
          </div>
        ))}

        <h3>Practical Experience</h3>
        {experience.map((entry, index) => (
          <div key={index}>
            <p>
              <strong>Company:</strong> {entry.company}
            </p>
            <p>
              <strong>Position:</strong> {entry.position}
            </p>
            <p>
              <strong>Responsibilities:</strong> {entry.responsibilities}
            </p>
            <p>
              <strong>From:</strong> {entry.from}
            </p>
            <p>
              <strong>Until:</strong> {entry.until}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => downloadCVData({ generalInfo, education, experience })}
      >
        Export CV
      </button>
    </div>
  );
}

function downloadCVData(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cvData.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
