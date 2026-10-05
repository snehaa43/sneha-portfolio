'use client';

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, GithubIcon, LinkedinIcon, ArrowUpRightIcon, CopyIcon, CheckIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-box">
          <p className="contact-intro">
            I am always open to discussing new opportunities, full-stack projects, software engineering internships, or tech collaborations. Feel free to reach out directly.
          </p>

          <div className="contact-links-grid">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <MailIcon size={20} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-card-value"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                <span className="copy-btn-text">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-interactive"
            >
              <div className="contact-card-icon">
                <LinkedinIcon size={20} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">Connect on LinkedIn</span>
              </div>
              <ArrowUpRightIcon size={18} className="contact-card-arrow" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-interactive"
            >
              <div className="contact-card-icon">
                <GithubIcon size={20} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">Explore Repositories</span>
              </div>
              <ArrowUpRightIcon size={18} className="contact-card-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
