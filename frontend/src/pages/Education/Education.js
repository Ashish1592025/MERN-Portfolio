import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <section id="education" className="education-section">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education</h2>
      <hr />
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <h3 className="degree">{edu.degree}</h3>
              <span className="duration">
                {edu.start} - {edu.end}
              </span>
            </div>
            <p className="school">{edu.school}</p>
            {edu.location && <p className="location">📍 {edu.location}</p>}
            {edu.percentage && (
              <p className="percentage">Percentage: {edu.percentage + "%"}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
