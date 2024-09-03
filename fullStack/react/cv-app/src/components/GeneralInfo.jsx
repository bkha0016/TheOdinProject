import React, { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="general-info">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={info.phone}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
