import React from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Thineshkaran Sureshkaran</h1>
          <p>Software Engineering Student | Web & Full-Stack Developer</p>
          <button 
            className="cta-btn" 
            onClick={() => navigate("/portfolio")}
          >
            View Portfolio
          </button>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <h2>Senior E-commerce Executive</h2>
          <p>Experience in e-commerce and analytics projects.</p>
        </div>
        <div className="highlight-card">
          <h2>React & Node.js & PHP Developer</h2>
          <p>Building modern web apps and dashboards.</p>
        </div>
        <div className="highlight-card">
          <h2>Graphic Designer</h2>
          <p>Logo Design, Banner Design & more.</p>
        </div>
        <div className="highlight-card">
          <h2>AI & Automation</h2>
          <p>Creating tools to simplify workflows.</p>
        </div>
      </section>

   
      <section className="home-cta">
        <h2>Let's Build Something Amazing Together!</h2>
        <button 
          className="cta-btn" 
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </button>
      </section>

    </div>
  );
};

export default Home;
