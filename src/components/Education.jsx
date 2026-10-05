import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCapIcon } from './Icons';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>

        <div className="education-list">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-main">
                <div className="education-title-row">
                  <div className="education-degree-wrap">
                    <GraduationCapIcon size={20} className="education-icon" />
                    <h3 className="education-degree">{edu.degree}</h3>
                  </div>
                  <span className="education-timeline">{edu.timeline}</span>
                </div>

                <div className="education-institution">{edu.institution}</div>
                {edu.university && (
                  <div className="education-university">{edu.university}</div>
                )}
              </div>

              <div className="education-badge-wrap">
                <span className="education-score-badge">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
