import { useState } from "react";
import "../styles/PracticalExperience.css"; // Optional styling file

export default function PracticalExperience({ data, onChange }) {
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
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={data.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={data.position}
            onChange={handleChange}
          />
          <input
            type="text"
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={data.responsibilities}
            onChange={handleChange}
          />
          <input
            type="text"
            name="from"
            placeholder="Start Date"
            value={data.from}
            onChange={handleChange}
          />
          <input
            type="text"
            name="until"
            placeholder="End Date"
            value={data.until}
            onChange={handleChange}
          />
          <button onClick={handleEditToggle}>Submit</button>
        </>
      ) : (
        <>
          <p>
            <strong>Company:</strong> {data.company}
          </p>
          <p>
            <strong>Position:</strong> {data.position}
          </p>
          <p>
            <strong>Responsibilities:</strong> {data.responsibilities}
          </p>
          <p>
            <strong>From:</strong> {data.from}
          </p>
          <p>
            <strong>Until:</strong> {data.until}
          </p>
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
}
