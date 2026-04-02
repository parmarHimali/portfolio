"use client";
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/lib/data";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "React.js", "Next.js"];

  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle gradient-text">Showcase</h3>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active glass-effect" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="project-card-v2 glass-effect">
              <div className="project-header">
                <div className="project-category-badge">{project.category}</div>
                <div className="project-visual-container">
                  <div className={`project-bg-blob ${project.category}`}></div>
                </div>
              </div>

              <div className="project-body">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill-v2">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                {project.live && project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-live"
                  >
                    View Project{" "}
                    <ExternalLink size={16} style={{ marginLeft: "8px" }} />
                  </a>
                ) : (
                  <span className="btn-project-coming">Private Project</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
