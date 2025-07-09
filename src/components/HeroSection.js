import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1>Best Shipping Partner</h1>
        <p>
          Amet, tempus egestas facilisis volutpat viverra molestie lobortis
          posuere maecenas, molestie lobortis posuere maecenas. Egot sapien,
          gravida nequi
        </p>
        <div className="hero-buttons">
          <button className="btn-get-quote">GET A QUOTE</button>
          <button className="btn-learn-more">LEARN MORE</button>
        </div>
      </div>
      <div className="safety-first-banner">
        <span>SAFETY FIRST</span>
      </div>
    </section>
  );
};

export default HeroSection;
