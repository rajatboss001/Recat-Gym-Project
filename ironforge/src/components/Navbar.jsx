import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <img src="/assets/hisargym-logo.jpg" alt="HisarGym Logo" style={{height: '32px', borderRadius: '4px'}} />
          HISAR<span className="text-primary">GYM</span>
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/programs" className="nav-link">Programs</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/trainers" className="nav-link">Trainers</Link>
          <Link to="/membership" className="nav-link">Membership</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          <Link to="/free-trial" className="btn-primary mobile-cta">Book Free Trial</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/free-trial" className="btn-primary desktop-cta">Book Free Trial</Link>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem'}}>
            {isOpen ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
