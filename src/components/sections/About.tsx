"use client";
import React from "react";
import { portfolioData } from "@/lib/data";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle gradient-text">Introduction</h3>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-content glass-effect">
            <p className="about-text">{portfolioData.about}</p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value gradient-text">1+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-item">
                <span className="stat-value gradient-text">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-value gradient-text">4+</span>
                <span className="stat-label">Months Intern</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <h4 className="highlights-title">Core Strengths</h4>
            <ul className="highlights-list">
              {portfolioData.highlights.map((item, idx) => (
                <li key={idx} className="highlight-item">
                  <span className="bullet"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
