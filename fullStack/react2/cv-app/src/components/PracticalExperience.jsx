import React, { useState } from "react";
import "../styles/PracticalExperience.css";

export default function PracticalExperience({ data, onChange }) {
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  const handleAddExperience = () => {
    onChange([...data, newExperience]);
    setNewExperience({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      until: "",
    });
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = data.filter((_, i) => i !== index);
    onChange(updatedExperience);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="section">
      <h2>Practical Experience</h2>

      {/* Existing Practical Experience Entries */}
      {data.map((entry, index) => (
        <div key={index} className="entry">
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
          <button onClick={() => handleRemoveExperience(index)}>Remove</button>
        </div>
      ))}

      {/* Form to Add New Practical Experience */}
      <div className="new-experience">
        <h3>Add New Experience</h3>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={newExperience.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position Title"
          value={newExperience.position}
          onChange={handleChange}
        />
        <input
          type="text"
          name="responsibilities"
          placeholder="Responsibilities"
          value={newExperience.responsibilities}
          onChange={handleChange}
        />
        <input
          type="text"
          name="from"
          placeholder="From Date"
          value={newExperience.from}
          onChange={handleChange}
        />
        <input
          type="text"
          name="until"
          placeholder="Until Date"
          value={newExperience.until}
          onChange={handleChange}
        />
        <button onClick={handleAddExperience}>Add Experience</button>
      </div>
    </div>
  );
}
