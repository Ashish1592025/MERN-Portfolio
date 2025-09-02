import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import WeatherApp from '../../assets/images/WeatherApp.png';
import ShoppingCart from '../../assets/images/ShoppingCart.png';


const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          {/* add here caption which description is related to all project */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
          assumenda fugiat voluptatem provident, quae, temporibus enim,
          consequuntur modi nisi vero voluptas perspiciatis sequi nam ipsum
          maiores alias aut labore. Sed libero nesciunt perspiciatis! Quod
          excepturi repellendus impedit accusamus qui quasi expedita placeat
          corrupti molestiae dicta eaque, provident eum distinctio! Quia.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React Website</span>
                <img src={WeatherApp} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Weather App</h5>
                </div>
                <a className="ad-btn" href="https://weather-app-gold-pi-42.vercel.app/" target="_blank">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React Website</span>
                <img src={ShoppingCart} alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Shopping Cart</h5>
                </div>
                <a className="ad-btn" href="https://shopping-cart-vert-eight.vercel.app/" target="_blank">View</a>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="https://innois.in/wp-content/uploads/2024/06/showing-cart-trolley-shopping-online-sign-graphic-scaled.jpg" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node JS</span>
                <span className="card-detail-badge">Express JS</span>
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Shopping Cart App</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
              </div>
            </div>
          </div> */}
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
