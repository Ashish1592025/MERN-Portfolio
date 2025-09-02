import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import Education from "./pages/Education/Education";
import WorkExperience from "./pages/WorkExperience/WorkExperience";

function App() {
  const [theme] = useTheme();
  const educationData = [
    {
      degree: "3 year Diploma in Computer Science and Engineering",
      school: "Guru Nanak Dev Polytechnic College, Ludhiana",
      start: "June 2017",
      end: "May 2020",
      location: "Ludhiana, India",
      percentage: 79.5,
    },
    {
      degree: "Matriculation",
      school: "Mata Mohan Dai Oswal Public School",
      start: "Apr 2016",
      end: "Mar 2017",
      location: "Ludhiana, India",
      percentage: 93.6,
    },
  ];
  const experienceData = [
    {
      title: "Assistant",
      company: "Kangaro Industries Limited",
      start: "Feb 2025",
      end: "July 2025",
      location:"Sahnewal",
      type: "Full-Time",
      responsibilities: [
        "Managing incoming of Packaging store",
        "Maintaining record on MS Excel sheets",
      ]
    },
    {
      title: "Assistant",
      company: "Hero Cycles Limited",
      start: "Feb 2024",
      end: "Jan 2025",
      location:"Ludhiana",
      type: "Full-Time",
      responsibilities: [
        "Resolving complaints of customer regarding product",
        "Maintaining record on MS Excel sheets",
      ]
    },
    {
      title: "Customer Service Associate",
      company: "Tech Mahindra Limited",
      start: "Feb 2023",
      end: "Jan 2024",
      location:"Noida",
      type: "Full-Time",
      responsibilities: [
        "Resolving customer issues regarding product and services"
      ]
    },
  ]
  return (
    <>
      <div id={theme}>
        {/* to enable toast */}
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education education={educationData}/>
          <WorkExperience experience={experienceData}/>
          <Techstack />
          <Projects />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With 😍 Ashish &copy; 2025</h4>
          </Tada>
        </div>
      </div>
      {/* smooth effect for going upward */}
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
