import React from 'react';
import { useParams, Link } from 'react-router-dom';

const trainersData = {
  'alex': { name: 'Alex Morgan', role: 'Head Strength Coach', exp: '10+ Years', bio: 'Alex specializes in athletic performance and muscle building. With over a decade of experience training elite athletes, Alex knows exactly how to push your limits safely and effectively.', specialties: ['Hypertrophy', 'Powerlifting', 'Sports Conditioning'] },
  'ryan': { name: 'Ryan Carter', role: 'Personal Trainer', exp: '7 Years', bio: 'Ryan focuses on helping beginners establish a solid foundation in strength and conditioning. His patient, methodical approach ensures you build habits that last a lifetime.', specialties: ['Beginner Fitness', 'Weight Loss', 'Mobility'] },
  'sophia': { name: 'Sophia Williams', role: 'Fitness & Nutrition', exp: '8 Years', bio: 'Sophia believes that you cannot out-train a bad diet. She combines high-intensity workouts with custom nutrition protocols to help clients achieve rapid, sustainable body transformations.', specialties: ['Nutrition Planning', 'HIIT', 'Fat Loss'] },
  'daniel': { name: 'Daniel Brooks', role: 'Performance Coach', exp: '5 Years', bio: 'Daniel is an expert in biomechanics and functional movement. He works with clients looking to improve their daily movement patterns, recover from injuries, and increase core stability.', specialties: ['Functional Training', 'Rehab', 'Core Strength'] },
  'emma': { name: 'Emma Davis', role: 'Women\'s Fitness', exp: '6 Years', bio: 'Emma is dedicated to empowering women through strength training. She breaks down the myths of female fitness and helps her clients build confidence inside and outside the gym.', specialties: ['Glute Building', 'Pre/Post Natal', 'Strength'] },
  'michael': { name: 'Michael Stone', role: 'Functional Training', exp: '9 Years', bio: 'Michael is our lead functional trainer, bringing a high-energy approach to every session. His workouts are designed to make you faster, stronger, and more explosive.', specialties: ['Cross-Training', 'Agility', 'Endurance'] }
};

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainersData[id];

  if (!trainer) {
    return (
      <div className="pt-32 pb-16 text-center container">
        <h2>Trainer Not Found</h2>
        <Link to="/trainers" className="btn-primary mt-4">Back to Trainers</Link>
      </div>
    );
  }

  return (
    <div className="trainer-detail-page pt-32 pb-16">
      <div className="container">
        
        <Link to="/trainers" className="text-primary font-bold mb-8 inline-block">← Back to All Trainers</Link>
        
        <div className="split-layout" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          {/* Trainer Image */}
          <div className="split-img-wrapper" style={{ flex: '1', position: 'sticky', top: '100px' }}>
            <img 
              src="/assets/trainer.jpg" 
              alt={trainer.name} 
              className="rounded-lg object-cover w-full" 
              style={{ borderRadius: '12px', height: '600px' }} 
            />
          </div>
          
          {/* Trainer Details */}
          <div className="split-content" style={{ flex: '1.2' }}>
            <h1 className="text-5xl font-bold mb-2">{trainer.name}</h1>
            <h3 className="text-primary text-2xl mb-6">{trainer.role}</h3>
            
            <div className="mb-8 p-6" style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h4 className="mb-2 text-xl">Experience</h4>
              <p className="text-gray-300">{trainer.exp} of professional coaching</p>
            </div>
            
            <h4 className="mb-4 text-2xl">Biography</h4>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {trainer.bio}
            </p>
            
            <h4 className="mb-4 text-2xl">Specialties</h4>
            <div className="flex" style={{ gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {trainer.specialties.map((spec, index) => (
                <span key={index} style={{ background: 'rgba(187, 247, 208, 0.1)', color: 'var(--primary-color)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold' }}>
                  {spec}
                </span>
              ))}
            </div>
            
            <div className="cta-box mt-8" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', padding: '2rem', borderRadius: '12px', border: '1px solid #27272a' }}>
              <h3 className="mb-4 text-2xl">Ready to train with {trainer.name.split(' ')[0]}?</h3>
              <p className="text-gray-400 mb-6">Book a free trial session to discuss your goals and see if you're a good fit.</p>
              <Link to="/free-trial" className="btn-primary w-full text-center display-block">Book Free Session</Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetail;
