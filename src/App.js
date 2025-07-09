import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientLogos from "./components/ClientLogos";
import NewsSection from "./components/NewsSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <StatsSection />
      <div className="testimonials-why-choose-us-container">
        <Testimonials />
        <WhyChooseUs />
      </div>
      <ClientLogos />
      <NewsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
