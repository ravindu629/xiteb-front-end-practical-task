import React from "react";
import "./ServicesSection.css";
import airFreightImage from "../assets/air-freight.jpg";
import droneServicesImage from "../assets/drone-services.jpg";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h3 className="section-subtitle">Real Solution, Real Fast!</h3>
        <h2 className="section-title">Best Global Logistics Solutions.</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={airFreightImage} alt="Air Freight Services" />
            <h3>Air Freight Services</h3>
            <p>
              At our Auto Service garage, we are fully appreciate how difficult
              accur It is for people to find.
            </p>
            <a href="#readmore" className="read-more">
              Read More
            </a>
          </div>
          <div className="service-card">
            <img src={droneServicesImage} alt="Drone Services" />
            <h3>Drone Services</h3>
            <p>
              These are unique and often they differ from one industry to the
              other. Our logistics expertise.
            </p>
            <a href="#readmore" className="read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="solutions-tagline">
          <p>
            Logistic & Transport Solutions Saves Your Time. **Finds Your
            Solutions**
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
