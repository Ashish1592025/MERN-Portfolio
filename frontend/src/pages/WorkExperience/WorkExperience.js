import React from "react";
import "./WorkExperience.css";

const WorkExperience = ({ experience }) => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase section-title">Work Experience</h2>
      <hr />
      <div className="experience-list">
        {experience.map((job, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3 className="job-title">{job.title}</h3>
              <span className="duration">
                {job.start} - {job.end}
              </span>
            </div>
            <p className="company">{job.company}</p>
            {job.location && <p className="location">📍 {job.location}</p>}
            {job.type && <p className="job-type">{job.type}</p>}

            {job.responsibilities && job.responsibilities.length > 0 && (
              <ul className="responsibilities">
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
