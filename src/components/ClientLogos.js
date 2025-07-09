import React from "react";
import "./ClientLogos.css";
import clientLogoReuss from "../assets/logo-1.jpg";
import clientLogoGenesis from "../assets/logo-2.jpg";
import clientLogoIntegrid from "../assets/logo-3.jpg";
import clientLogoBrainbez from "../assets/logo-4.jpg";
import clientLogoTM from "../assets/logo-5.jpg";

const ClientLogos = () => {
  return (
    <section className="client-logos-section">
      <div className="container client-logos-grid">
        <img src={clientLogoReuss} alt="REUSS" />
        <img src={clientLogoGenesis} alt="GENESIS" />
        <img src={clientLogoIntegrid} alt="INTEGRID CORP" />
        <img src={clientLogoBrainbez} alt="BRAINBEZ" />
        <img src={clientLogoTM} alt="TM" />
      </div>
    </section>
  );
};

export default ClientLogos;
