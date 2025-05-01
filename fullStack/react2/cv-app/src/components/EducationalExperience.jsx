import { useState } from "react";
import "../styles/EducationalExperience.css"; // Optional styling file

export default function EducationalExperience({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: value,
    });
  }

  function handleEditToggle() {
    setIsEditing(!isEditing);
  }

  return (
    <div className="educational-experience">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={data.school}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title of Study"
            value={data.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date of Study"
            value={data.date}
            onChange={handleChange}
          />
          <button onClick={handleEditToggle}>Submit</button>
        </>
      ) : (
        <>
          <p>
            <strong>School:</strong> {data.school}
          </p>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Date:</strong> {data.date}
          </p>
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
}
