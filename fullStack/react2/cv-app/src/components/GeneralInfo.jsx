import React, { useState } from "react";
import "../styles/GeneralInfo.css";

export default function GeneralInfo({ data, onChange }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(updatedInfo);
    setEditMode(false);
  };

  return (
    <div className="section">
      <h2>General Information</h2>

      {/* Display General Info or Edit Form */}
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={updatedInfo.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={updatedInfo.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={updatedInfo.phone}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
