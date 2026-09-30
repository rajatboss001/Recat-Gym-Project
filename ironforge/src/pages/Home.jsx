import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Basic GSAP Hero entrance animation
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current.children, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: 'url(/assets/gym-hero.jpg)'}}></div>
        <div className="container hero-content" ref={textRef}>
          <span className="hero-subtitle">DISCOVER THE STRONGER YOU</span>
          <h1 className="hero-title">TRAIN HARD.<br/>LIVE <span className="text-primary">STRONG</span></h1>
          <p className="hero-desc">
            Professional training, world-class equipment and a community built to help you become stronger every day.
          </p>
          <div className="hero-actions">
            <Link to="/programs" className="btn-primary">Explore Programs</Link>
            <Link to="/free-trial" className="btn-secondary">
              ► Watch Video
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="trust-section bg-dark">
        <div className="container trust-grid">
          <div className="trust-card">
            <h3 className="text-primary">2,500+</h3>
            <p>Happy Members</p>
          </div>
          <div className="trust-card">
            <h3 className="text-primary">15+</h3>
            <p>Expert Trainers</p>
          </div>
          <div className="trust-card">
            <h3 className="text-primary">10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="trust-card">
            <h3 className="text-primary">50+</h3>
            <p>Weekly Classes</p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section-padding">
        <div className="container split-layout">
          <div className="split-img-wrapper">
             <img src="/assets/gym-workout.jpg" alt="Premium Gym Equipment" className="split-img" />
          </div>
          <div className="split-content">
            <span className="section-subtitle">ABOUT US</span>
            <h2>More Than A Gym</h2>
            <p>We believe fitness is not just about the body, it's about the mind, attitude and lifestyle. Our professional environment provides expert coaching, modern equipment, and a supportive community.</p>
            <ul className="benefits-list">
              <li>✓ Personalized Workouts</li>
              <li>✓ Nutrition Guidance</li>
              <li>✓ State-of-the-art Equipment</li>
              <li>✓ Expert Coaching</li>
            </ul>
            <Link to="/about" className="btn-primary mt-4">Discover Our Story</Link>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="programs-section section-padding bg-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">OUR PROGRAMS</span>
            <h2>Find The Right Program For You</h2>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-img-box">
                <img src="/assets/gym-workout.jpg" alt="Strength" />
              </div>
              <div className="program-info">
                <h3>Strength Training</h3>
                <p>Build muscle, increase strength and improve overall performance.</p>
                <Link to="/programs/strength" className="text-primary mt-4 inline-block font-bold">Learn More →</Link>
              </div>
            </div>
            <div className="program-card">
              <div className="program-img-box">
                <img src="/assets/gym-workout.jpg" alt="Personal Training" />
              </div>
              <div className="program-info">
                <h3>Personal Training</h3>
                <p>One-on-one coaching designed entirely around your specific goals.</p>
                <Link to="/programs/personal-training" className="text-primary mt-4 inline-block font-bold">Learn More →</Link>
              </div>
            </div>
            <div className="program-card">
              <div className="program-img-box">
                <img src="/assets/gym-workout.jpg" alt="HIIT" />
              </div>
              <div className="program-info">
                <h3>Cardio & HIIT</h3>
                <p>Burn calories, boost endurance and improve your cardiovascular health.</p>
                <Link to="/programs/hiit" className="text-primary mt-4 inline-block font-bold">Learn More →</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/programs" className="btn-secondary">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">WHAT OUR MEMBERS SAY</span>
            <h2>Real People. Real Results.</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"Ironforge changed my life! The trainers are amazing and the environment keeps me motivated every day."</p>
              <div className="author" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src="/assets/member1.jpg" alt="Sarah Johnson" style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Member</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"The personalized plan and nutrition coaching helped me achieve results I never thought possible."</p>
              <div className="author" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src="/assets/member2.jpg" alt="Michael Brown" style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} />
                <div className="author-info">
                  <h4>Michael Brown</h4>
                  <span>Member</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"Best gym experience ever! Clean facilities, great community and excellent support from the staff."</p>
              <div className="author" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src="/assets/member3.jpg" alt="Emily Davis" style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} />
                <div className="author-info">
                  <h4>Emily Davis</h4>
                  <span>Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Replaced and Moved Down */}
      
      {/* Why Choose Us Section */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">WHY CHOOSE US</span>
            <h2>We Are Built Different</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Expert Coaching</h3>
              <p>Professional trainers who guide your training and push you further.</p>
            </div>
            <div className="feature-card">
              <h3>Premium Equipment</h3>
              <p>Modern equipment for strength, power, and athletic performance.</p>
            </div>
            <div className="feature-card">
              <h3>Personalized Programs</h3>
              <p>Training designed entirely around your individual body and goals.</p>
            </div>
            <div className="feature-card">
              <h3>Real Community</h3>
              <p>A motivating environment that keeps members consistent and accountable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="trainers-preview section-padding bg-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">MEET YOUR COACHES</span>
            <h2>Elite Training Staff</h2>
          </div>
          <div className="trainers-grid">
            {[1, 2, 3].map((t) => (
              <div key={t} className="trainer-card">
                <img src="/assets/trainer.jpg" alt="Trainer" className="trainer-img" />
                <div className="trainer-info">
                  <h3>Alex Morgan</h3>
                  <span className="text-primary">Head Strength Coach</span>
                  <p>10+ years experience specializing in athletic performance and muscle building.</p>
                  <Link to={`/trainers/alex`} className="btn-secondary mt-4 w-full">View Profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="facilities-preview section-padding">
        <div className="container text-center">
          <span className="section-subtitle">OUR GYM</span>
          <h2 className="mb-8 text-4xl font-bold">World-Class Facilities</h2>
          <div className="facility-img-large">
            <img src="/assets/facility.jpg" alt="Gym Facility" />
            <div className="facility-overlay">
              <h3>Elite Performance Zones</h3>
              <Link to="/facilities" className="btn-primary mt-4">Explore Our Facility</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="blog-preview section-padding bg-dark">
        <div className="container">
          <div className="section-header flex justify-between align-center">
            <div>
              <span className="section-subtitle">FROM THE FITNESS FLOOR</span>
              <h2>Latest Articles</h2>
            </div>
            <Link to="/blog" className="btn-secondary">View All Articles</Link>
          </div>
          <div className="blog-grid mt-8">
            <div className="blog-card">
              <img src="/assets/gym-workout.jpg" alt="Blog" />
              <div className="blog-info">
                <span className="text-primary text-sm font-bold">Training • 3 min read</span>
                <h3 className="mt-2 mb-2 text-xl">How to Build Strength as a Beginner</h3>
                <p className="text-muted">Mastering the basics is the first step to unlocking your full potential.</p>
              </div>
            </div>
            <div className="blog-card">
              <img src="/assets/gym-workout.jpg" alt="Blog" />
              <div className="blog-info">
                <span className="text-primary text-sm font-bold">Nutrition • 5 min read</span>
                <h3 className="mt-2 mb-2 text-xl">How Much Protein Do You Really Need?</h3>
                <p className="text-muted">Understanding macros and optimal protein intake for muscle growth.</p>
              </div>
            </div>
            <div className="blog-card">
              <img src="/assets/gym-workout.jpg" alt="Blog" />
              <div className="blog-info">
                <span className="text-primary text-sm font-bold">Mindset • 4 min read</span>
                <h3 className="mt-2 mb-2 text-xl">7 Mistakes That Slow Down Progress</h3>
                <p className="text-muted">Avoid these common pitfalls to accelerate your fitness journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section section-padding">
        <div className="container text-center">
          <div className="newsletter-box">
            <h2>Get Stronger. Stay Informed.</h2>
            <p className="mb-8 mt-4 text-gray-300">Subscribe to our newsletter for training tips, nutrition advice, and gym updates.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input type="email" placeholder="Your email address" required className="newsletter-input" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section section-padding" style={{background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', borderTop: '1px solid #27272a'}}>
        <div className="container text-center cta-content max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Your Only Limit Is You</h2>
          <p className="text-xl text-gray-400 mb-8">Start your fitness journey today and discover what you're truly capable of.</p>
          <div className="flex justify-center gap-4">
            <Link to="/free-trial" className="btn-primary">Book Free Trial</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
