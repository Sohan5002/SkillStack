import React, { useState } from 'react';
import './Page.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p className="subtitle">Get in touch with us</p>
      </div>
      
      <div className="page-content">
        <div className="contact-container">
          <div className="card">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="card">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <p><strong>Email:</strong> contact@example.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

