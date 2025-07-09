import React from "react";
import "./WelcomeSection.css";
import welcomeImage from "../assets/welcome-image.jpg";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container welcome-content">
        <div className="welcome-image">
          <img src={welcomeImage} alt="TransMax Logistics" />
          <div className="clients-worldwide">
            <span>15,350+</span>
            <p>Clients Worldwide</p>
          </div>
        </div>
        <div className="welcome-text">
          <h2>TransMax Logistics Around the World</h2>
          <p>
            Transmax is the world's driving worldwide coordinations supplier we
            uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </p>
          <p>
            Our worth added administrations guarantee the progression of goods
            proceeds consistently and supply chains stay lean and streamined for
            progress,
          </p>
          <button className="btn-more-about-us">MORE ABOUT US</button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
