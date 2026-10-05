import React from 'react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillsData.map((categoryGroup) => (
            <div key={categoryGroup.category} className="skill-card">
              <h3 className="skill-category-title">{categoryGroup.category}</h3>
              <div className="skill-tags">
                {categoryGroup.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
