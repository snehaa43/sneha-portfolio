import React from 'react';
import { featuredProjectsData, additionalProjectsData } from '../data/portfolioData';
import { ArrowUpRightIcon, GithubIcon } from './Icons';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Featured Projects Header */}
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>

        {/* Featured Projects Grid */}
        <div className="projects-grid">
          {featuredProjectsData.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <div className="project-title-group">
                  <h3 className="project-title">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      {project.title}
                    </a>
                  </h3>
                  {project.subtitle && (
                    <span className="project-subtitle">{project.subtitle}</span>
                  )}
                </div>

                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-link"
                  aria-label={`View ${project.title} repository`}
                  title={`View ${project.title}`}
                >
                  <ArrowUpRightIcon size={20} />
                </a>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-view-btn"
                >
                  <GithubIcon size={16} />
                  <span>View Project</span>
                  <ArrowUpRightIcon size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects List (Vertical) */}
        <div className="more-projects-section">
          <h3 className="more-projects-title">Other Projects</h3>

          <div className="more-projects-list">
            {additionalProjectsData.map((project) => (
              <div key={project.id} className="mini-project-card">
                <div className="mini-project-main">
                  <span className="mini-project-name">{project.title}</span>
                  <span className="mini-project-desc">{project.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
