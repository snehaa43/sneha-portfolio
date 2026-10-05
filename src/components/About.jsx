'use client';

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-box">
          <div className="about-content">
            {/* Introductory paragraph is visible */}
            <p className="about-text">{personalInfo.about[0]}</p>

            {/* Remaining paragraphs revealed when clicking Read More */}
            <div className={`about-more-content ${isExpanded ? 'is-open' : 'is-closed'}`}>
              {personalInfo.about.slice(1).map((paragraph, index) => (
                <p key={index} className="about-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="about-toggle-wrap">
            <button
              type="button"
              onClick={toggleExpand}
              className="btn btn-outline btn-sm read-more-btn"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
              {isExpanded ? <ChevronUpIcon size={15} /> : <ChevronDownIcon size={15} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
