import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page pt-32 pb-16">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400">Have questions? We're here to help.</p>
        </div>

        <div className="contact-grid flex gap-4 mt-16" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem'}}>
          <div className="contact-info">
            <h2 className="text-3xl font-bold mb-8">Gym Information</h2>
            
            <div className="info-block mb-8">
              <h4 className="text-primary font-bold mb-2">Visit Us</h4>
              <p className="text-lg">123 Ironforge Street<br/>Fitness District, NY 10001</p>
            </div>
            
            <div className="info-block mb-8">
              <h4 className="text-primary font-bold mb-2">Call Us</h4>
              <p className="text-lg">1111</p>
            </div>

            <div className="info-block mb-8">
              <h4 className="text-primary font-bold mb-2">Email</h4>
              <p className="text-lg">123@gmail.com</p>
            </div>

            <div className="info-block mb-8">
              <h4 className="text-primary font-bold mb-2">Opening Hours</h4>
              <p className="text-lg">Monday - Saturday: 6:00 AM - 10:00 PM<br/>Sunday: 7:00 AM - 2:00 PM</p>
            </div>
          </div>

          <div className="contact-form-container" style={{background: 'var(--bg-card)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)'}}>
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form className="flex flex-column" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}} onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
              <input type="text" placeholder="Your Name" required className="newsletter-input" />
              <input type="email" placeholder="Your Email" required className="newsletter-input" />
              <input type="text" placeholder="Subject" required className="newsletter-input" />
              <textarea placeholder="Your Message" required className="newsletter-input" rows="5"></textarea>
              <button type="submit" className="btn-primary mt-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
