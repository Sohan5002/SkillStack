import React from 'react';
import './Page.css';

function About() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>About Us</h1>
        <p className="subtitle">Learn more about who we are</p>
      </div>
      
      <div className="page-content">
        <div className="card">
          <h2>Our Story</h2>
          <p>
            Welcome to our About page. This is where you can share information
            about your company, team, mission, and values. Tell your visitors
            what makes you unique and why they should choose you.
          </p>
        </div>

        <div className="card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional service and create value for
            our customers. We are committed to excellence in everything we do
            and strive to make a positive impact in our community.
          </p>
        </div>

        <div className="card">
          <h2>Our Team</h2>
          <p>
            We have a dedicated team of professionals who are passionate about
            what they do. Together, we work towards achieving our common goals
            and delivering outstanding results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

