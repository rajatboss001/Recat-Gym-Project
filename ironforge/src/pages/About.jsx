import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page pt-32 pb-16">
      <div className="container">
        <div className="section-header text-center max-w-3xl mx-auto">
          <span className="section-subtitle">OUR STORY</span>
          <h1 className="text-5xl font-bold mb-8">Building Stronger Lives Since 2016</h1>
          <p className="text-xl text-gray-400">Ironforge Fitness wasn't just built to be a gym. It was built to be a community where people transform their bodies, build discipline, and push past their limits.</p>
        </div>

        <div className="about-split mt-16 flex gap-4">
          <div className="w-full">
            <img src="/assets/facility.jpg" alt="Gym History" className="rounded-lg object-cover w-full h-[400px]" style={{borderRadius: '12px'}} />
          </div>
          <div className="w-full flex justify-center align-center flex-column" style={{flexDirection: 'column', padding: '2rem'}}>
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted text-xl mb-4">To provide the highest quality training environment, expert coaching, and a supportive community to help you forge your strongest self.</p>
            <ul className="benefits-list mt-4">
              <li>✓ Elite coaching standards</li>
              <li>✓ No intimidation, just hard work</li>
              <li>✓ Continuous equipment upgrades</li>
              <li>✓ Focus on real, measurable results</li>
            </ul>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Core Values</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Discipline</h3>
              <p>Motivation gets you started, but discipline keeps you going when it gets hard.</p>
            </div>
            <div className="feature-card">
              <h3>Community</h3>
              <p>We train together, suffer together, and celebrate each other's victories.</p>
            </div>
            <div className="feature-card">
              <h3>Excellence</h3>
              <p>We maintain the highest standards in our facility, our coaching, and our effort.</p>
            </div>
            <div className="feature-card">
              <h3>Integrity</h3>
              <p>No shortcuts. Real results come from putting in honest, consistent work.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
