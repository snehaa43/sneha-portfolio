import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { AwardIcon } from './Icons';

const Certifications = () => {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-line"></div>
        </div>

        <div className="certifications-list">
          {certificationsData.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon-wrap">
                <AwardIcon size={18} />
              </div>
              <div className="certification-info">
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-meta">
                  <span className="certification-issuer">{cert.issuer}</span>
                  <span className="meta-separator">•</span>
                  <span className="certification-year">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
