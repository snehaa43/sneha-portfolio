import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { AwardIcon } from './Icons';

const Achievements = () => {
  return (
    <section className="section section-compact" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <div className="section-line"></div>
        </div>

        <div className="achievements-list">
          {achievementsData.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon-wrap">
                <AwardIcon size={20} />
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{item.title}</h3>
                {item.description && (
                  <p className="achievement-desc">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
