import React from 'react';
import './TrainingSection.css';

function TrainingSection() {
  return (
    <section className="training-section">
      <div className="training-container">
        <div className="training-image">
          <div className="classroom-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" alt="Training Classroom" className="classroom-training-image" />
          </div>
          <div className="pass-rate-card">
            <div className="trophy-icon">🏆</div>
            <div className="pass-rate-text">98% Pass Rate</div>
          </div>
        </div>
        <div className="training-content">
          <button className="about-training-btn">
            <span className="btn-icon">📚</span>
            About Our Training
          </button>
          <h2 className="training-title">
            <span className="highlight-purple">Hands-On Enterprise</span> Training for Real-World Success
          </h2>
          <p className="training-description">
            Our expert instructors bring years of enterprise experience to deliver comprehensive Red Hat training. 
            From foundational Linux skills to advanced cloud architecture, we prepare you for industry certification 
            and career advancement.
          </p>
          <div className="training-features">
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <div className="feature-text">
                <div className="feature-title">Expert Mentors</div>
                <div className="feature-subtitle">Industry veterans guide your learning journey</div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <div className="feature-text">
                <div className="feature-title">Practical Labs</div>
                <div className="feature-subtitle">Real cloud environments for hands-on practice</div>
              </div>
            </div>
          </div>
          <button className="explore-btn">Explore Programs</button>
        </div>
      </div>
    </section>
  );
}

export default TrainingSection;

