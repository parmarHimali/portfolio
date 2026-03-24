"use client";
import React from "react";
import { portfolioData } from "@/lib/data";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle gradient-text">Trajectory</h3>
          <h2 className="section-title">My Experience</h2>
        </div>

        <div className="timeline-container">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={exp.id}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content glass-effect">
                <span className="exp-period">{exp.period}</span>
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company gradient-text">{exp.company}</h4>
                <ul className="exp-achievements">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
