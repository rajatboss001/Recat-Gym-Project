import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="logo footer-logo" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <img src="/assets/hisargym-logo.jpg" alt="HisarGym Logo" style={{height: '40px', borderRadius: '4px'}} />
            HISAR<span className="text-primary">GYM</span>
          </Link>
          <p className="footer-desc">
            Build Strength. Build Discipline. Build Yourself. Professional training and a community built to help you become stronger every day.
          </p>
          <div className="social-links" style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/trainers" className="footer-link">Trainers</Link>
          <Link to="/programs" className="footer-link">Programs</Link>
          <Link to="/facilities" className="footer-link">Facilities</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Resources</h4>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <Link to="/schedule" className="footer-link">Schedule</Link>
          <Link to="/membership" className="footer-link">Membership</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Support</h4>
          <Link to="/contact" className="footer-link">Contact Us</Link>
          <Link to="/free-trial" className="footer-link">Free Trial</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HisarGym. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
