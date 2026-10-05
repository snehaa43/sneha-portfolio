import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileTextIcon, ArrowUpRightIcon } from './Icons';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">{personalInfo.name}</h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>

          <p className="hero-description">{personalInfo.shortBio}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              title="Open Resume in a new tab"
            >
              <FileTextIcon size={16} />
              <span>Resume</span>
              <ArrowUpRightIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
