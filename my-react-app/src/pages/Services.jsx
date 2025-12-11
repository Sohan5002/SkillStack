import React from 'react';
import './Page.css';

function Services() {
  const services = [
    {
      title: 'Service One',
      description: 'Detailed description of your first service offering.',
      icon: '🚀'
    },
    {
      title: 'Service Two',
      description: 'Detailed description of your second service offering.',
      icon: '💡'
    },
    {
      title: 'Service Three',
      description: 'Detailed description of your third service offering.',
      icon: '⚡'
    },
    {
      title: 'Service Four',
      description: 'Detailed description of your fourth service offering.',
      icon: '🎯'
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p className="subtitle">What we offer</p>
      </div>
      
      <div className="page-content">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

