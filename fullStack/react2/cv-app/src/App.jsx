import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import "./styles/App.css";

export default function App() {
  const [cvData, setCvData] = useState({
    generalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    education: {
      school: "",
      title: "",
      date: "",
    },
    experience: {
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      until: "",
    },
  });

  return (
    <div className="app">
      <h1>Create Your CV</h1>

      <GeneralInfo
        data={cvData.generalInfo}
        onChange={(updatedData) =>
          setCvData((prev) => ({
            ...prev,
            generalInfo: updatedData,
          }))
        }
      />

      <EducationalExperience
        data={cvData.education}
        onChange={(updatedData) =>
          setCvData((prev) => ({
            ...prev,
            education: updatedData,
          }))
        }
      />

      <PracticalExperience
        data={cvData.experience}
        onChange={(updatedData) =>
          setCvData((prev) => ({
            ...prev,
            experience: updatedData,
          }))
        }
      />

      <div className="preview">
        <h2>Preview of Your CV</h2>

        <p>
          <strong>Name:</strong> {cvData.generalInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {cvData.generalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {cvData.generalInfo.phone}
        </p>

        <h3>Education</h3>
        <p>
          <strong>School:</strong> {cvData.education.school}
        </p>
        <p>
          <strong>Title:</strong> {cvData.education.title}
        </p>
        <p>
          <strong>Date:</strong> {cvData.education.date}
        </p>

        <h3>Practical Experience</h3>
        <p>
          <strong>Company:</strong> {cvData.experience.company}
        </p>
        <p>
          <strong>Position:</strong> {cvData.experience.position}
        </p>
        <p>
          <strong>Responsibilities:</strong>{" "}
          {cvData.experience.responsibilities}
        </p>
        <p>
          <strong>From:</strong> {cvData.experience.from}
        </p>
        <p>
          <strong>Until:</strong> {cvData.experience.until}
        </p>
      </div>

      <button onClick={() => downloadCVData(cvData)}>Export CV</button>
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
