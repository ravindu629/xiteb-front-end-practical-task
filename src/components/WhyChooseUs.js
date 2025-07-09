import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <h3>WHY CHOOSE US</h3>
      <p className="section-subtext">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
      <ul className="why-list">
        <li>
          <span className="list-icon">✅</span>
          Dul ac hendrerit elementurn quam ipsum auctor lorem
        </li>
        <li>
          <span className="list-icon">✅</span>
          Mauris vel magna a est lobortis volutpat
        </li>
        <li>
          <span className="list-icon">✅</span>
          Sed bibendum ornare fonem mauris feugiat suspendisse neque
        </li>
        <li>
          <span className="list-icon">✅</span>
          Nulla scelerisque dul hendrerit elementum quam
        </li>
      </ul>
    </div>
  );
};

export default WhyChooseUs;
