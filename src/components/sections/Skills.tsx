"use client";
import React from "react";
import {
  Code,
  Cpu,
  Layers,
  Database,
  Layout,
  Smartphone,
  Zap,
  GitBranch,
  Globe,
  Figma,
  Terminal,
  Cloud,
  FileCode,
  Box,
} from "lucide-react";
import { portfolioData } from "@/lib/data";
import "./Skills.css";

// Map tech names to Real Devicon Logos
const iconMap: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "Git & GitHub":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "REST APIs":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Swagger:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  "Source Tree": "https://cdn.worldvectorlogo.com/logos/sourcetree-1.svg",
};

const Skills = () => {
  const allSkills = [
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.tools,
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle gradient-text">Expertise</h3>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-description">
            The technologies and tools I use to build fast, scalable, and
            user-focused web applications.
          </p>
        </div>

        <div className="skills-unified-grid">
          {allSkills.map((skill, i) => (
            <div key={skill} className="skill-item-card glass-effect">
              <div className="skill-item-icon">
                {iconMap[skill] ? (
                  <img src={iconMap[skill]} alt={skill} />
                ) : (
                  <Code size={32} />
                )}
              </div>
              <span className="skill-item-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
