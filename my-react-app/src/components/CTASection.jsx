import React from 'react';
import './CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          <h2 className="cta-title">Ready to transform your infrastructure?</h2>
          <p className="cta-subtitle">
            Join the ranks of successful enterprises powered by HawkStack
          </p>
          <button className="cta-button">
            Get Started with HawkStack
            <span className="arrow-icon">→</span>
          </button>
        </div>
        <p className="trust-indicator">Trusted by Fortune 500 companies worldwide</p>
      </div>
    </section>
  );
}

export default CTASection;

