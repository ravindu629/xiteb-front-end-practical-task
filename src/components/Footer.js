import React from "react";
import "./Footer.css";
import footerImg1 from "../assets/footer-img1.jpg";
import footerImg2 from "../assets/footer-img2.jpg";
import footerImg3 from "../assets/footer-img3.jpg";
import footerImg4 from "../assets/footer-img4.jpg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-col about-us">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong> info@cargoton.com
          </p>
        </div>
        <div className="footer-col latest-news">
          <h3>Latest News</h3>
          <ul>
            <li>
              <a href="#news1">News Title 1</a>
            </li>
            <li>
              <a href="#news2">News Title 2</a>
            </li>
            <li>
              <a href="#news3">News Title 3</a>
            </li>
            <li>
              <a href="#news4">News Title 4</a>
            </li>
          </ul>
        </div>
        <div className="footer-col customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="#faq">FAQ's</a>
            </li>
            <li>
              <a href="#payment">Payment Method</a>
            </li>
            <li>
              <a href="#booking">Booking Tips</a>
            </li>
            <li>
              <a href="#return">Return Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-col gallery">
          <h3>Customer Service</h3>
          <div className="gallery-grid">
            <img src={footerImg1} alt="Logistics Gallery 1" />
            <img src={footerImg2} alt="Logistics Gallery 2" />
            <img src={footerImg3} alt="Logistics Gallery 3" />
            <img src={footerImg4} alt="Logistics Gallery 4" />
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="container copyright-content">
          <p>Copyright © 2021 All Rights Reserved. Site by Xiteb</p>
          <div className="social-icons">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
