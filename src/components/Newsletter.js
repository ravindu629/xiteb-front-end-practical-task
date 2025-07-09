import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-content">
        <div className="newsletter-text">
          <h2>Weekly Newsletter</h2>
          <p>Then are many vaistions of passages of lorem ipsum avaliabie</p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter Your Mail" />
          <button className="btn-subscribe">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
