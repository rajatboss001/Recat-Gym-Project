import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../data/mockData';

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredPrograms, setFilteredPrograms] = useState(programsData);

  const categories = ['All', 'Strength', 'Muscle Building', 'Fat Loss', 'Personal Training', 'HIIT', 'Functional Training', 'Beginner', 'Performance', 'Mobility', 'Women', 'Conditioning', 'Group'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredPrograms(programsData);
    } else {
      setFilteredPrograms(programsData.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="programs-page">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: 'url(/assets/gym-hero.jpg)', backgroundPosition: 'center 20%'}}></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title text-6xl font-bold mb-4">TRAIN WITH PURPOSE</h1>
          <p className="hero-desc max-w-3xl mx-auto text-xl mb-8">
            Structured training programs designed to help you build strength, improve performance and achieve sustainable fitness results.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/free-trial" className="btn-primary">BOOK FREE TRIAL</Link>
            <Link to="/trainers" className="btn-secondary">VIEW TRAINERS</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          
          {/* Filters */}
          <div className="mb-12 overflow-x-auto pb-4" style={{ whiteSpace: 'nowrap' }}>
            <div className="flex gap-4 justify-center" style={{ minWidth: 'max-content' }}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {filteredPrograms.map(prog => (
              <div key={prog.id} className="program-card overflow-hidden" style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)', transition: 'transform 0.3s ease' }}>
                <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                  <img src={prog.img} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="program-card-img" />
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.8)', color: 'var(--primary-color)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {prog.category}
                  </span>
                </div>
                <div className="p-6" style={{ padding: '1.5rem' }}>
                  <h3 className="text-2xl font-bold mb-2">{prog.title}</h3>
                  <p className="text-gray-400 mb-4 h-16">{prog.desc}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-gray-800" style={{ borderBottom: '1px solid #27272a', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>⏳ {prog.duration}</span>
                    <span>⚡ {prog.difficulty}</span>
                  </div>
                  
                  <Link to={`/programs/${prog.id}`} className="btn-primary w-full text-center block" style={{ display: 'block', textAlign: 'center' }}>
                    VIEW PROGRAM
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">COMPARE</span>
            <h2 className="text-4xl font-bold">FIND THE RIGHT PROGRAM FOR YOU</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table style={{ width: '100%', minWidth: '800px', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--primary-color)' }}>
                  <th className="p-4">Goal</th>
                  <th className="p-4">Difficulty</th>
                  <th className="p-4">Sessions</th>
                  <th className="p-4">Training Style</th>
                  <th className="p-4">Ideal For</th>
                </tr>
              </thead>
              <tbody>
                {programsData.slice(0, 5).map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #27272a' }}>
                    <td className="p-4 font-bold text-white">{p.title}</td>
                    <td className="p-4 text-gray-400">{p.difficulty}</td>
                    <td className="p-4 text-gray-400">{p.sessionsPerWeek} / week</td>
                    <td className="p-4 text-gray-400">{p.trainingType}</td>
                    <td className="p-4 text-gray-400">{p.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container text-center">
          <span className="section-subtitle">THE PROCESS</span>
          <h2 className="text-4xl font-bold mb-16">HOW YOUR TRAINING WORKS</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Fitness Assessment' },
              { num: '02', title: 'Goal Setting' },
              { num: '03', title: 'Program Selection' },
              { num: '04', title: 'Training' },
              { num: '05', title: 'Progress Tracking' },
              { num: '06', title: 'Continuous Improvement' }
            ].map(step => (
              <div key={step.num} style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', position: 'relative' }}>
                <span style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', left: '20px' }}>{step.num}</span>
                <h3 className="text-xl font-bold mt-8 relative z-10">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section section-padding" style={{background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', borderTop: '1px solid #27272a'}}>
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">YOUR GOAL DESERVES A PLAN.</h2>
          <p className="text-xl text-gray-400 mb-8">Stop guessing. Start training with a structured program designed around your goals.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/free-trial" className="btn-primary">BOOK FREE TRIAL</Link>
            <Link to="/contact" className="btn-secondary">CONTACT US</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
