import React, { useState } from "react";

function EducationalExperience() {
  const [educationList, setEducationList] = useState([
    { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (index, event) => {
    const values = [...educationList];
    values[index][event.target.name] = event.target.value;
    setEducationList(values);
  };

  const handleAdd = () => {
    setEducationList([
      ...educationList,
      { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    ]);
  };

  const handleRemove = (index) => {
    const values = [...educationList];
    values.splice(index, 1);
    setEducationList(values);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      {isSubmitted ? (
        <div>
          {educationList.map((education, index) => (
            <div key={index}>
              <p>School Name: {education.schoolName}</p>
              <p>Title of Study: {education.titleOfStudy}</p>
              <p>Date of Study: {education.dateOfStudy}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          {educationList.map((education, index) => (
            <div key={index}>
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={education.schoolName}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                type="text"
                name="titleOfStudy"
                placeholder="Title of Study"
                value={education.titleOfStudy}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                type="date"
                name="dateOfStudy"
                value={education.dateOfStudy}
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

export default EducationalExperience;
