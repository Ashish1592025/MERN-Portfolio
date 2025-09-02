import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Slide from "react-reveal/Slide";

const Home = () => {
  // destructuring
  const [theme, setTheme] = useTheme();

  // handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* container-fluid is bootstrap class, home-container is custom class */}
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Slide right>
            <h2>Hi 👋 I'm a </h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer!", "Mern Stack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Slide>
          <Slide bottom>
            <div className="home-buttons">
              {/* bootstrap classes used */}
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9217469282"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                download="Ashish Kumar.pdf"
              >
                My Resume
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Home;
