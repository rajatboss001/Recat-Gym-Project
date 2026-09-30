import React, { useState } from 'react';

const faqData = [
  {
    question: "What are your membership plans?",
    answer: "We offer Basic, Pro, and Elite plans. Basic includes full gym access. Pro includes all group classes. Elite includes personal training and nutrition guidance."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 1-day free trial pass for all new local residents. You can book it directly through our Free Trial page."
  },
  {
    question: "Are beginners welcome?",
    answer: "Absolutely. Our gym is built on a supportive community. We have beginner-friendly programs, and our trainers are always happy to help you get started safely."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open Monday to Saturday from 6:00 AM to 10:00 PM, and on Sundays from 7:00 AM to 2:00 PM."
  },
  {
    question: "Do you provide personal training?",
    answer: "Yes, we have over 15 certified expert trainers specializing in strength, weight loss, mobility, and athletic performance."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page pt-32 pb-16">
      {/* Hero Banner with generated AI image */}
      <div className="faq-hero" style={{backgroundImage: "url('/assets/faq-banner.jpg')"}}>
        <div className="faq-hero-overlay"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">How Can We Help?</h1>
          <p className="text-xl text-gray-300">Frequently Asked Questions</p>
        </div>
      </div>

      <div className="container mt-16 max-w-3xl">
        <div className="faq-accordion">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className="faq-answer"
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
