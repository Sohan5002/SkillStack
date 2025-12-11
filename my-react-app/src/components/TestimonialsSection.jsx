import React from 'react';
import './TestimonialsSection.css';

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-badge">Client Success Stories</div>
        <h2 className="testimonials-title">Client Testimonials</h2>
        <p className="testimonials-subtitle">
          Real results from enterprise leaders who trust HawkStack
        </p>
        <div className="testimonials-grid">
          <div className="testimonial-card testimonial-red">
            <div className="quote-icon">❝</div>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "HawkStack delivered exceptional results in our cloud migration project. Their Red Hat expertise was invaluable."
            </p>
            <div className="testimonial-company red">Kynari</div>
            <div className="testimonial-role">Technology Director</div>
            <div className="testimonial-company-name">Global Technology Services</div>
            <div className="testimonial-dot red-dot"></div>
          </div>
          <div className="testimonial-card testimonial-blue">
            <div className="quote-icon">❝</div>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Professional team with deep technical knowledge. They helped us modernize our infrastructure with confidence."
            </p>
            <div className="testimonial-company blue">HCL</div>
            <div className="testimonial-role">IT Operations Manager</div>
            <div className="testimonial-company-name">Enterprise Infrastructure</div>
            <div className="testimonial-dot blue-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

