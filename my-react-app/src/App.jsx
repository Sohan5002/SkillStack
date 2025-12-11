import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo-group">
              <Link to="/" className="nav-logo">
                <div className="logo-icon">🦅</div>
                <span>HAWKSTACK</span>
              </Link>
              <Link to="/" className="nav-logo redhat">
                <div className="logo-icon">🎩</div>
                <span>Red Hat</span>
              </Link>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">HawkStack's Approach</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Red Hat Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">RHCSA Certification</Link>
              </li>
            </ul>
            <div className="nav-actions">
              <Link to="/contact" className="btn-contact">Contact</Link>
              <Link to="/contact" className="btn-primary">Talk to Learning Team</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-icon">🦅</div>
                  <span>HawkStack</span>
                </div>
                <p>Enterprise AI & Cloud Security Solutions for modern businesses.</p>
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <h4>Product</h4>
                  <ul>
                    <li><Link to="/services">Features</Link></li>
                    <li><Link to="/services">Pricing</Link></li>
                    <li><Link to="/services">Documentation</Link></li>
                    <li><Link to="/services">API Reference</Link></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>Company</h4>
                  <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/about">Careers</Link></li>
                    <li><Link to="/about">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>Legal</h4>
                  <ul>
                    <li><Link to="/contact">Privacy Policy</Link></li>
                    <li><Link to="/contact">Terms of Service</Link></li>
                    <li><Link to="/contact">Security</Link></li>
                    <li><Link to="/contact">Compliance</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 HawkStack • RedHat. All rights reserved.</p>
              <div className="social-icons">
                <a href="#" aria-label="LinkedIn">🔗</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Social">📱</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

