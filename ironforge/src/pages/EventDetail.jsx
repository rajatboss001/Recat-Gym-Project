import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { eventsData } from '../data/mockData';

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id);
  
  const [formState, setFormState] = useState('idle'); // idle, loading, success, error

  if (!event) return <Navigate to="/events" />;

  const handleRegister = (e) => {
    e.preventDefault();
    setFormState('loading');
    // Mock API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="event-detail-page">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: `url(${event.img})`, backgroundPosition: 'center top'}}></div>
        <div className="container hero-content text-center pt-32">
          <span className="hero-subtitle bg-primary text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">{event.category.toUpperCase()}</span>
          <h1 className="hero-title text-6xl font-bold mb-4">{event.title.toUpperCase()}</h1>
          <div className="flex justify-center gap-6 text-gray-300 font-bold mb-8 flex-wrap">
            <span>📅 {event.date}</span>
            <span>🕒 {event.time}</span>
            <span>📍 {event.location}</span>
          </div>
          <a href="#register" className="btn-primary">REGISTER FOR EVENT</a>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <Link to="/events" className="text-primary font-bold mb-8 inline-block">← Back to Events</Link>

          <div className="split-layout" style={{ gap: '5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            
            <div className="main-info" style={{ flex: '2', minWidth: '300px' }}>
              <h2 className="text-4xl font-bold mb-6">About This Event</h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">{event.desc}</p>

              <h3 className="text-3xl font-bold mb-6">Event Highlights</h3>
              <ul className="mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
                {event.highlights.map((h, i) => (
                  <li key={i} style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    {h}
                  </li>
                ))}
              </ul>

              <h3 className="text-3xl font-bold mb-6">Schedule</h3>
              <div className="mb-12" style={{ borderLeft: '2px solid #333', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {event.schedule.map((item, i) => {
                  const [time, desc] = item.split(' — ');
                  return (
                    <div key={i} style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-38px', top: '4px', width: '14px', height: '14px', background: 'var(--primary-color)', borderRadius: '50%', border: '2px solid #000' }}></div>
                      <h4 className="font-bold text-primary mb-1">{time}</h4>
                      <p className="text-white text-lg">{desc}</p>
                    </div>
                  );
                })}
              </div>

              <h3 className="text-3xl font-bold mb-4">Who Can Join?</h3>
              <p className="text-gray-400 mb-12 text-lg">{event.whoCanJoin}</p>
            </div>

            <div className="sidebar" style={{ flex: '1', minWidth: '300px', position: 'sticky', top: '100px' }}>
              <div className="p-8 mb-8" style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">What To Bring</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                  {event.whatToBring.map((item, i) => (
                    <li key={i} className="mb-3 text-lg">{item}</li>
                  ))}
                </ul>
              </div>

              <div id="register" className="p-8" style={{ background: '#111', borderRadius: '12px', border: '1px solid var(--primary-color)' }}>
                <h3 className="text-2xl font-bold mb-6">Register Now</h3>
                
                {formState === 'success' ? (
                  <div className="text-center py-8">
                    <div style={{ width: '60px', height: '60px', background: 'var(--primary-color)', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>✓</div>
                    <h4 className="text-xl font-bold mb-2">Registration Successful</h4>
                    <p className="text-gray-400 mb-6">Thanks for registering. Our team will contact you with the event details.</p>
                    <button onClick={() => setFormState('idle')} className="btn-secondary w-full">Register Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <input type="text" placeholder="Full Name" required style={{ padding: '1rem', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '6px' }} />
                    <input type="email" placeholder="Email Address" required style={{ padding: '1rem', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '6px' }} />
                    <input type="tel" placeholder="Phone Number" required style={{ padding: '1rem', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '6px' }} />
                    <select required style={{ padding: '1rem', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '6px' }}>
                      <option value="">Select Fitness Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    <button type="submit" className="btn-primary w-full mt-4" disabled={formState === 'loading'}>
                      {formState === 'loading' ? 'PROCESSING...' : 'REGISTER FOR EVENT'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default EventDetail;
