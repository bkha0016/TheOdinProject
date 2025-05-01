import { useState } from "react";
import "../styles/GeneralInfo.css"; // Optional: create and import your styles

export default function GeneralInfo({ data, onChange }) {
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
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={data.phone}
            onChange={handleChange}
          />
          <button onClick={handleEditToggle}>Submit</button>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
}
