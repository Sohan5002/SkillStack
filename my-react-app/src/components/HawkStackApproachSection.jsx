import React from 'react';
import './HawkStackApproachSection.css';

function HawkStackApproachSection() {
  return (
    <section className="hawkstack-approach-section">
      <div className="hawkstack-approach-container">
        <h2 className="approach-title">
          <span className="approach-title-purple">HawkStack's</span> Approach
        </h2>
        <p className="approach-description">
          HawkStack Technologies accelerates digital evolution with DevOps, Cloud, Automation, and Security 
          expertise—driving innovation and faster time-to-market.
        </p>
        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-icon red-icon">🔗</div>
            <h3 className="approach-card-title">Logic's Framework</h3>
            <p className="approach-card-description">Precision-engineered structures & analytics</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon blue-icon">🚀</div>
            <h3 className="approach-card-title">Innovation's Leap</h3>
            <p className="approach-card-description">Data-driven, agile methodologies</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon green-icon">🎯</div>
            <h3 className="approach-card-title">Insight's Depth</h3>
            <p className="approach-card-description">Predictive modeling & deep analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HawkStackApproachSection;

