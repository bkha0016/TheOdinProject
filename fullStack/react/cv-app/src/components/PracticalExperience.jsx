import React, { useState } from "react";

function PracticalExperience() {
  const [practicalList, setPracticalList] = useState([
    {
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateTo: "",
    },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (index, event) => {
    const values = [...practicalList];
    values[index][event.target.name] = event.target.value;
    setPracticalList(values);
  };

  const handleAdd = () => {
    setPracticalList([
      ...practicalList,
      {
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateTo: "",
      },
    ]);
  };

  const handleRemove = (index) => {
    const values = [...practicalList];
    values.splice(index, 1);
    setPracticalList(values);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      {isSubmitted ? (
        <div>
          {practicalList.map((experience, index) => (
            <div key={index}>
              <p>Company Name: {experience.companyName}</p>
              <p>Position Title: {experience.positionTitle}</p>
              <p>Main Responsibilities: {experience.mainResponsibilities}</p>
              <p>Date From: {experience.dateFrom}</p>
              <p>Date To: {experience.dateTo}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          {practicalList.map((experience, index) => (
            <div key={index}>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={experience.companyName}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                type="text"
                name="positionTitle"
                placeholder="Position Title"
                value={experience.positionTitle}
                onChange={(event) => handleChange(index, event)}
              />
              <textarea
                name="mainResponsibilities"
                placeholder="Main Responsibilities"
                value={experience.mainResponsibilities}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                type="date"
                name="dateFrom"
                value={experience.dateFrom}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                type="date"
                name="dateTo"
                value={experience.dateTo}
                onChange={(event) => handleChange(index, event)}
              />
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
          <button onClick={handleAdd}>Add More</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default PracticalExperience;
