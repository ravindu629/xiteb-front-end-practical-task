import React, { useState, useEffect } from "react";
import "./StatsSection.css";

const StatsSection = () => {
  // State variables to hold the current animated count for each stat
  const [packagesCount, setPackagesCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [tonsCount, setTonsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  // Define the final target numbers for each stat
  const targetPackages = 890;
  const targetCountries = 137;
  const targetTons = 740;
  const targetClients = 600;

  // useEffect hook to run the animation when the component mounts
  useEffect(() => {
    const duration = 2000; // Total animation duration in milliseconds (e.g., 2 seconds)
    const stepTime = 10; // Interval for each step of the animation in milliseconds

    // Helper function to animate a single number
    const animateCount = (start, end, setter) => {
      let current = start; // Start counting from this value
      // Calculate how much to increment in each step to reach 'end' within 'duration'
      const increment = (end - start) / (duration / stepTime);

      const timer = setInterval(() => {
        current += increment; // Increase current count
        if (current >= end) {
          setter(end); // Set to final value and clear interval if target is reached
          clearInterval(timer);
        } else {
          setter(Math.ceil(current)); // Update state, rounding up to ensure integer display
        }
      }, stepTime);

      // Cleanup function: important to clear the interval if the component unmounts
      return () => clearInterval(timer);
    };

    // Start animation for each stat
    const cleanupPackages = animateCount(0, targetPackages, setPackagesCount);
    const cleanupCountries = animateCount(
      0,
      targetCountries,
      setCountriesCount
    );
    const cleanupTons = animateCount(0, targetTons, setTonsCount);
    const cleanupClients = animateCount(0, targetClients, setClientsCount);

    // Return a cleanup function for useEffect to clear all intervals if the component unmounts
    return () => {
      cleanupPackages();
      cleanupCountries();
      cleanupTons();
      cleanupClients();
    };
  }, []); // Empty dependency array ensures this effect runs only ONCE after the initial render

  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <div className="stat-item">
          <span className="stat-number">{packagesCount}+</span>
          <p className="stat-description">Delivered packages</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">{countriesCount}</span>
          <p className="stat-description">Countries covered</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">{tonsCount}+</span>
          <p className="stat-description">Tons of Goods</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">{clientsCount}+</span>
          <p className="stat-description">Satisfied Clients</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
