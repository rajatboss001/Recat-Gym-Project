import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { programsData } from '../data/mockData';

const ProgramDetail = () => {
  const { id } = useParams();
  const program = programsData.find(p => p.id === id);

  if (!program) return <Navigate to="/programs" />;

  const relatedPrograms = programsData.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="program-detail-page">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: `url(${program.img})`, backgroundPosition: 'center'}}></div>
        <div className="container hero-content text-center pt-32">
          <span className="hero-subtitle">{program.category.toUpperCase()}</span>
          <h1 className="hero-title text-6xl font-bold mb-4">{program.title.toUpperCase()}</h1>
          <p className="hero-desc max-w-3xl mx-auto text-xl mb-8">{program.desc}</p>
          <Link to="/free-trial" className="btn-primary">START THIS PROGRAM</Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <Link to="/programs" className="text-primary font-bold mb-8 inline-block">← Back to Programs</Link>

          <div className="split-layout" style={{ gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            
            <div className="main-info" style={{ flex: '2', minWidth: '300px' }}>
              <h2 className="text-4xl font-bold mb-6">Program Overview</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                <div className="stat-box" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <span className="text-gray-400 block text-sm">Duration</span>
                  <span className="text-xl font-bold text-primary">{program.duration}</span>
                </div>
                <div className="stat-box" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <span className="text-gray-400 block text-sm">Difficulty</span>
                  <span className="text-xl font-bold text-primary">{program.difficulty}</span>
                </div>
                <div className="stat-box" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <span className="text-gray-400 block text-sm">Frequency</span>
                  <span className="text-xl font-bold text-primary">{program.sessionsPerWeek}x / week</span>
                </div>
                <div className="stat-box" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <span className="text-gray-400 block text-sm">Type</span>
                  <span className="text-xl font-bold text-primary">{program.trainingType}</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4">Who Is This For?</h3>
              <p className="text-gray-400 text-lg mb-12">{program.idealFor}</p>

              <h3 className="text-3xl font-bold mb-6">Benefits</h3>
              <ul className="mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0 }}>
                {program.benefits.map((b, i) => (
                  <li key={i} style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                    {b}
                  </li>
                ))}
              </ul>

              <h3 className="text-3xl font-bold mb-4">What You'll Do</h3>
              <div className="mb-12 p-6" style={{ background: '#1a1a1a', borderRadius: '8px', border: '1px dashed #333' }}>
                <p className="font-bold text-primary text-xl text-center">{program.structure}</p>
              </div>

              <h3 className="text-3xl font-bold mb-6">Sample Weekly Structure</h3>
              <div className="mb-12" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {program.weeklyPlan.map((day, i) => (
                  <div key={i} style={{ padding: '1rem', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid #27272a' }}>
                    {day}
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="faq-list">
                {program.faq.map((f, i) => (
                  <div key={i} className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-2">Q: {f.q}</h4>
                    <p className="text-gray-400">A: {f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar" style={{ flex: '1', minWidth: '300px', position: 'sticky', top: '100px' }}>
              <div className="p-6 mb-8" style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Program Coach</h3>
                <div className="flex items-center gap-4 mb-6" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src="/assets/trainer.jpg" alt={program.trainerName} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 className="font-bold">{program.trainerName}</h4>
                    <Link to={`/trainers/${program.trainer}`} className="text-primary text-sm">View Profile →</Link>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">What You Need</h3>
                <p className="text-gray-400 text-sm mb-6">{program.equipment}</p>

                <Link to="/free-trial" className="btn-primary w-full text-center block" style={{ display: 'block', textAlign: 'center' }}>
                  BOOK FREE TRIAL
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="section-padding bg-dark">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Programs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {relatedPrograms.map(p => (
              <div key={p.id} style={{ background: 'var(--bg-card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 h-10 overflow-hidden">{p.desc}</p>
                  <Link to={`/programs/${p.id}`} className="text-primary font-bold">View Program →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProgramDetail;
