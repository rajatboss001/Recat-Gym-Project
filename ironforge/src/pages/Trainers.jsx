import React from 'react';
import { Link } from 'react-router-dom';

const Trainers = () => {
  const trainersList = [
    { id: 'alex', name: 'Alex Morgan', role: 'Head Strength Coach', exp: '10+ Years' },
    { id: 'ryan', name: 'Ryan Carter', role: 'Personal Trainer', exp: '7 Years' },
    { id: 'sophia', name: 'Sophia Williams', role: 'Fitness & Nutrition', exp: '8 Years' },
    { id: 'daniel', name: 'Daniel Brooks', role: 'Performance Coach', exp: '5 Years' },
    { id: 'emma', name: 'Emma Davis', role: 'Women\'s Fitness', exp: '6 Years' },
    { id: 'michael', name: 'Michael Stone', role: 'Functional Training', exp: '9 Years' }
  ];

  return (
    <div className="trainers-page pt-32 pb-16">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">MEET YOUR COACHES</span>
          <h1 className="text-5xl font-bold mb-4">Elite Training Staff</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Work with industry-leading professionals who are dedicated to your success.</p>
        </div>

        <div className="trainers-grid mt-16">
          {trainersList.map((t) => (
            <div key={t.id} className="trainer-card">
              {/* Reusing our AI generated trainer image for the demo */}
              <img src="/assets/trainer.jpg" alt={t.name} className="trainer-img" />
              <div className="trainer-info">
                <h3>{t.name}</h3>
                <span className="text-primary font-bold block mb-2">{t.role}</span>
                <p>Experience: {t.exp}</p>
                <Link to={`/trainers/${t.id}`} className="btn-secondary mt-4 w-full">View Profile</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
