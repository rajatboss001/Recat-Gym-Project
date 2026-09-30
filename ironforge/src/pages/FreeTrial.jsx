import React, { useState } from 'react';

const FreeTrial = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="free-trial-page pt-32 pb-16">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-subtitle">START YOUR JOURNEY</span>
          <h1 className="text-5xl font-bold mb-4">Book Your Free Trial</h1>
          <p className="text-xl text-gray-400">Experience Ironforge Fitness with a complimentary 1-day pass. Fill out the form below and our team will get in touch.</p>
        </div>

        <div className="form-container" style={{background: 'var(--bg-card)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)'}}>
          {submitted ? (
            <div className="success-message text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-3xl font-bold mb-2">Request Received!</h2>
              <p className="text-gray-400">Thank you for your interest. One of our trainers will contact you shortly to schedule your free trial.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-column gap-4" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div className="form-group flex gap-4">
                <input type="text" placeholder="First Name" required className="newsletter-input w-full" />
                <input type="text" placeholder="Last Name" required className="newsletter-input w-full" />
              </div>
              <input type="email" placeholder="Email Address" required className="newsletter-input w-full" />
              <input type="tel" placeholder="Phone Number" required className="newsletter-input w-full" />
              
              <select className="newsletter-input w-full" required style={{appearance: 'none'}}>
                <option value="" disabled selected>Select Primary Fitness Goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle">Muscle Building</option>
                <option value="strength">Strength & Power</option>
                <option value="general">General Fitness</option>
              </select>

              <textarea placeholder="Any specific questions or concerns?" className="newsletter-input w-full" rows="4"></textarea>

              <button type="submit" className="btn-primary w-full mt-4" style={{padding: '1rem'}}>Confirm Trial Request</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
