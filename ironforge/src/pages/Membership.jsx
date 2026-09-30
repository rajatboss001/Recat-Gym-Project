import React from 'react';
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div className="membership-page pt-32 pb-16">
      <div className="container text-center">
        <span className="section-subtitle">MEMBERSHIP PLANS</span>
        <h1 className="text-5xl font-bold mb-4">Invest In Your Health</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ marginBottom: '5rem' }}>Choose a plan that fits your goals. No hidden fees, no long-term contracts. Just pure fitness.</p>
        
        <div className="pricing-grid flex justify-center gap-4">
          
          <div className="pricing-card">
            <h3>STARTER</h3>
            <div className="price"><span>$</span>49<span>/mo</span></div>
            <ul className="features">
              <li>✓ Full Gym Access</li>
              <li>✓ Basic Equipment</li>
              <li>✓ Locker Access</li>
              <li>✗ Group Classes</li>
              <li>✗ Personal Training</li>
            </ul>
            <Link to="/contact" className="btn-secondary w-full mt-4">Choose Starter</Link>
          </div>
          
          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <h3>PRO</h3>
            <div className="price"><span>$</span>89<span>/mo</span></div>
            <ul className="features">
              <li>✓ Full Gym Access</li>
              <li>✓ All Group Classes</li>
              <li>✓ Premium Equipment</li>
              <li>✓ 1 Fitness Assessment</li>
              <li>✗ Personal Training</li>
            </ul>
            <Link to="/contact" className="btn-primary w-full mt-4">Choose Pro</Link>
          </div>
          
          <div className="pricing-card">
            <h3>ELITE</h3>
            <div className="price"><span>$</span>149<span>/mo</span></div>
            <ul className="features">
              <li>✓ Full Gym Access</li>
              <li>✓ All Group Classes</li>
              <li>✓ Weekly Personal Training</li>
              <li>✓ Nutrition Guidance</li>
              <li>✓ Priority Support</li>
            </ul>
            <Link to="/contact" className="btn-secondary w-full mt-4">Choose Elite</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Membership;
