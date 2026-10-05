import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copyright">
          © 2026 {personalInfo.name}
        </div>

        <div className="footer-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="footer-link"
            aria-label="Send Email"
          >
            <MailIcon size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
