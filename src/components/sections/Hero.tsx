"use client";
import { portfolioData } from "@/lib/data";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-intro">
            Hi, I'm
          </p>
          <h1 className="hero-name">
            {portfolioData.name}
          </h1>
          <h2 className="hero-title gradient-text">
            {portfolioData.title}
          </h2>
          <p className="hero-tagline">
            {portfolioData.tagline}
          </p>

          <div className="hero-actions">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">View Resume</a>
            <a href="#contact" className="btn-secondary glass-effect">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-overlay glass-effect"></div>
            <img src="/Himali.jpeg" alt="Himali Parmar" className="hero-img" />
          </div>
        </div>
      </div>

      {/* <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
