import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import photo from '../../assets/images/photo.png';

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={photo} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                {/* my about us */}
                I’m a passionate Full-Stack Developer specializing in the MERN
                stack (MongoDB, Express.js, React, Node.js). I love building
                dynamic, scalable, and user-friendly applications that solve
                real-world problems. With a strong foundation in JavaScript and
                modern web technologies, I enjoy working across the entire
                development cycle — from crafting responsive front-end
                interfaces to designing robust back-end architectures and
                integrating efficient APIs. When I’m not coding, I’m learning
                new technologies and optimizing workflows. My goal is to create products that deliver
                exceptional user experiences and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
