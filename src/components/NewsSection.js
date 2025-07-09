import React from "react";
import "./NewsSection.css";
import newsTruck from "../assets/news-truck.jpg";
import newsTrain from "../assets/news-train.jpg";
import newsPlane from "../assets/news-plane.jpg";
import newsShip from "../assets/news-ship.jpg";

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      date: "26",
      image: newsTruck,
      title: "CURABITUR CREM CASM QUEE",
      author: "Admin",
      comments: "13",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      date: "22",
      image: newsTrain,
      title: "CURABITUR LOREM UISM QUIS",
      author: "Admin",
      comments: "15",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      date: "20",
      image: newsPlane,
      title: "CURABITUR LOREM UISM QUIS",
      author: "Admin",
      comments: "15",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      date: "15",
      image: newsShip,
      title: "CURABITUR LOREM UISM QUIS",
      author: "Helena",
      comments: "13",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">LATEST NEWS</h2>
        <p className="section-subtitle">CONGUEEL</p>
        <div className="news-grid">
          {newsArticles.map((article) => (
            <div className="news-card" key={article.id}>
              <div className="news-date">{article.date}</div>
              <img src={article.image} alt={article.title} />
              <div className="news-content">
                <h3>{article.title}</h3>
                <div className="news-meta">
                  <span>
                    <i className="fas fa-user"></i> {article.author}
                  </span>
                  <span>
                    <i className="fas fa-comments"></i> {article.comments}
                  </span>
                </div>
                <p>{article.excerpt}</p>
                <a href="#readmore" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
