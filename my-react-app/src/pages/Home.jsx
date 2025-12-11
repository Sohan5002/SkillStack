import React from 'react';
import './Home.css';
import TrainingSection from '../components/TrainingSection';
import RHCSADetailsSection from '../components/RHCSADetailsSection';
import HawkStackApproachSection from '../components/HawkStackApproachSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

function Home() {
  return (
    <div className="home-page">
      {/* Top CTA Banner */}
      <section className="top-cta-banner">
        <div className="top-cta-container">
          <button className="top-cta-button">Discuss Your Industry Needs</button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="cert-badge">
              <span className="badge-icon">🎓</span>
              <span>Red Hat Certified Training</span>
            </div>
            <h1 className="hero-title">
              <span className="title-purple">RHCSA Certification &</span>
              <span className="title-white"> Enterprise Cloud Solutions</span>
            </h1>
            <p className="hero-description">
              Master Red Hat Enterprise Linux and accelerate your career with industry-recognized 
              certifications and hands-on cloud training.
            </p>
            <div className="hero-buttons">
              <button className="btn-enroll">Enroll for RHCSA / Training</button>
              <button className="btn-view">View Courses</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">500K+</div>
                <div className="stat-label">Threats Blocked</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Monitoring</div>
              </div>
            </div>
          </div>
          <div className="hero-graphics">
            <div className="cloud-icon">
              <img src="/images/cloud.png" alt="Cloud Security" className="cloud-lock-image" />
            </div>
            <div className="cube-stack">
              <img src="/images/cube.png" alt="Cloud Infrastructure" className="cubes-image" />
            </div>
            <div className="security-status">
              <div className="status-icon">🛡️</div>
              <div className="status-text">Security Status</div>
              <div className="status-subtext">All Systems Protected</div>
            </div>
            <div className="rhcsa-badge-large">
              <img src="/images/rhcsa-shield.svg" alt="RHCSA Certification" className="rhcsa-shield-image" />
            </div>
            <div className="metrics-box">
              <div className="metric">10M+ Events/Day</div>
              <div className="metric">50ms Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <TrainingSection />

      {/* RHCSA Details Section */}
      <RHCSADetailsSection />

      {/* HawkStack's Approach Section */}
      <HawkStackApproachSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Secure Infrastructure Hero */}
      <section className="secure-hero-section">
        <div className="top-cta-badge">Ready to Get Started?</div>
        <div className="secure-hero-container">
          <h1 className="secure-hero-title">
            Secure Your Cloud Infrastructure <span className="secure-hero-red">Today</span>
          </h1>
          <p className="secure-hero-subtitle">
            Join industry leaders in building secure, AI-powered cloud infrastructure.
          </p>
          <div className="secure-hero-buttons">
            <button className="secure-btn-trial">
              Start Free Trial
              <span className="btn-arrow">→</span>
            </button>
            <button className="secure-btn-sales">
              Contact Sales
              <span className="btn-envelope">✉</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Home;