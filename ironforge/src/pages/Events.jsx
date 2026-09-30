import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/mockData';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');

  const categories = ['All', 'Upcoming', 'Challenge', 'Competition', 'Workshop', 'Community', 'Celebration'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredEvents(eventsData);
    } else if (activeFilter === 'Upcoming') {
      setFilteredEvents(eventsData.filter(e => e.status === 'Upcoming' || e.status === 'Open'));
    } else {
      setFilteredEvents(eventsData.filter(e => e.category === activeFilter));
    }
  }, [activeFilter]);

  const featuredEvent = eventsData[0];
  const galleryImages = ['/assets/gym-hero.jpg', '/assets/gym-workout.jpg', '/assets/facility.jpg', '/assets/faq-banner.jpg'];

  const openLightbox = (img) => {
    setLightboxImg(img);
    setLightboxOpen(true);
  };

  return (
    <div className="events-page">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: 'url(/assets/gym-workout.jpg)', backgroundPosition: 'center top'}}></div>
        <div className="container hero-content text-center pt-32">
          <h1 className="hero-title text-6xl font-bold mb-4">TRAIN. COMPETE. CONNECT.</h1>
          <p className="hero-desc max-w-3xl mx-auto text-xl mb-8">
            More than workouts — experience challenges, competitions, community events and fitness experiences throughout the year.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="section-padding bg-dark">
        <div className="container">
          <span className="section-subtitle">FEATURED EVENT</span>
          <div className="split-layout" style={{ background: '#111', borderRadius: '16px', overflow: 'hidden', border: '1px solid #333' }}>
            <div className="split-img-wrapper" style={{ margin: 0 }}>
              <img src={featuredEvent.img} alt={featuredEvent.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }} />
            </div>
            <div className="split-content" style={{ padding: '3rem' }}>
              <h2 className="text-4xl font-bold mb-2">{featuredEvent.title.toUpperCase()}</h2>
              <div className="flex gap-4 mb-4 text-gray-400 font-bold text-sm">
                <span>📅 {featuredEvent.date}</span>
                <span>🕒 {featuredEvent.time}</span>
              </div>
              <p className="text-lg text-gray-300 mb-8">{featuredEvent.desc}</p>
              <div className="flex gap-4 flex-wrap">
                <Link to={`/events/${featuredEvent.id}`} className="btn-secondary">VIEW EVENT</Link>
                <Link to={`/events/${featuredEvent.id}#register`} className="btn-primary">REGISTER NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-subtitle">CALENDAR</span>
            <h2 className="text-4xl font-bold">UPCOMING EVENTS</h2>
          </div>
          
          {/* Filters */}
          <div className="overflow-x-auto pb-4" style={{ whiteSpace: 'nowrap', marginBottom: '3rem' }}>
            <div className="flex gap-4 justify-center" style={{ minWidth: 'max-content', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveFilter(cat)}
                  className={`btn-secondary ${activeFilter === cat ? 'active' : ''}`}
                  style={activeFilter === cat ? { background: 'var(--primary-color)', color: '#000', borderColor: 'var(--primary-color)' } : { padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card" style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                <img src={event.img} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="p-6" style={{ padding: '1.5rem' }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary font-bold text-sm uppercase">{event.category}</span>
                    <span style={{ fontSize: '0.75rem', background: '#333', padding: '2px 8px', borderRadius: '4px' }}>{event.status}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-400 mb-4 pb-4 border-b border-gray-800">
                    <div className="mb-1">📅 {event.date}</div>
                    <div className="mb-1">🕒 {event.time}</div>
                    <div>📍 {event.location}</div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 h-10 overflow-hidden">{event.desc}</p>
                  
                  <Link to={`/events/${event.id}`} className="btn-secondary w-full text-center block" style={{ display: 'block', textAlign: 'center' }}>
                    View Event
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="section-padding bg-dark text-center">
        <div className="container">
          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="trust-card">
              <h3 className="text-primary text-5xl font-bold mb-2">25+</h3>
              <p>Events Hosted</p>
            </div>
            <div className="trust-card">
              <h3 className="text-primary text-5xl font-bold mb-2">1,200+</h3>
              <p>Participants</p>
            </div>
            <div className="trust-card">
              <h3 className="text-primary text-5xl font-bold mb-2">50+</h3>
              <p>Community Challenges</p>
            </div>
            <div className="trust-card">
              <h3 className="text-primary text-5xl font-bold mb-2">100+</h3>
              <p>Training Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">MEMORIES</span>
            <h2 className="text-4xl font-bold">EVENT GALLERY</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {galleryImages.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt="Gallery" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onClick={() => openLightbox(img)}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <button 
            onClick={() => setLightboxOpen(false)}
            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' }}
          >
            ×
          </button>
          <img src={lightboxImg} alt="Lightbox" style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }} />
        </div>
      )}

      {/* Final CTA */}
      <section className="cta-section section-padding" style={{background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', borderTop: '1px solid #27272a'}}>
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">YOUR NEXT CHALLENGE STARTS HERE.</h2>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <Link to="/events" className="btn-primary">SEE ALL EVENTS</Link>
            <Link to="/free-trial" className="btn-secondary">BOOK FREE TRIAL</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
