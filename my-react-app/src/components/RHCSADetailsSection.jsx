import React from 'react';
import './RHCSADetailsSection.css';

function RHCSADetailsSection() {
  return (
    <section className="rhcsa-details-section">
      <div className="rhcsa-details-container">
        <div className="rhcsa-icon">🎓</div>
        <h2 className="rhcsa-details-title">
          <span className="rhcsa-title-white">Red Hat Certified System Administrator</span>
          <span className="rhcsa-title-red"> (RHCSA®)</span>
        </h2>
        <p className="rhcsa-details-description">
          An IT professional who can perform core system administration on Red Hat Enterprise Linux. 
          Credential earned after passing RHCSA Exam (EX200).
        </p>
        <div className="rhcsa-features-grid">
          <div className="rhcsa-feature-card">
            <div className="feature-icon red-check">✓</div>
            <h3 className="feature-title">Performance-Based Exam</h3>
          </div>
          <div className="rhcsa-feature-card">
            <div className="feature-icon purple-check">✓</div>
            <h3 className="feature-title">Industry Recognized</h3>
          </div>
          <div className="rhcsa-feature-card">
            <div className="feature-icon green-check">✓</div>
            <h3 className="feature-title">Career Advancement</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RHCSADetailsSection;

