import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h3>TRUSTED CLIENTS</h3>
      <p className="section-subtext">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
      <div className="testimonial-card">
        <div className="quote-icon">"</div>
        <p className="testimonial-text">
          Hitege congue ell nostre lectus orci pour lempor se schauts Integer
          sheet magna p vestibulum. Mam rum comque diem Amenade maurs og mi
          Curabitur laoreet ovat al pabibendum
        </p>
        <div className="client-info">
          <span className="client-name">JOHN DEO</span>
          <span className="client-title">Managing Client</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
