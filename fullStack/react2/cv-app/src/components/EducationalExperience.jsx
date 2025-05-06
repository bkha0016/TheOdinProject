import React, { useState } from "react";
import "../styles/EducationalExperience.css";

export default function EducationalExperience({ data, onChange }) {
  const [newEducation, setNewEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const handleAddEducation = () => {
    onChange([...data, newEducation]);
    setNewEducation({ school: "", title: "", date: "" });
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = data.filter((_, i) => i !== index);
    onChange(updatedEducation);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="section">
      <h2>Educational Experience</h2>

      {/* Existing Education Entries */}
      {data.map((entry, index) => (
        <div key={index} className="entry">
          <p>
            <strong>School:</strong> {entry.school}
          </p>
          <p>
            <strong>Title:</strong> {entry.title}
          </p>
          <p>
            <strong>Date:</strong> {entry.date}
          </p>
          <button onClick={() => handleRemoveEducation(index)}>Remove</button>
        </div>
      ))}

      {/* Form to Add New Education */}
      <div className="new-education">
        <h3>Add New Education</h3>
        <input
          type="text"
          name="school"
          placeholder="School Name"
          value={newEducation.school}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title of Study"
          value={newEducation.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date of Study"
          value={newEducation.date}
          onChange={handleChange}
        />
        <button onClick={handleAddEducation}>Add Education</button>
      </div>
    </div>
  );
}
