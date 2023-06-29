import React, { useState } from 'react';
import Faqquestion from '../components/FaqQuestion';
import '../styles/faq.css';
const Faq = () => {
  const head = 'Frequently Asked Questions';
  const description = 'Can’t find the answers here? Check out our';
  const span = 'help center';

  const [faqs, setFaqs] = useState([
    {
      question: 'Lorem ipsum dolor sit amet consectetu.',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Netus augue ultrices eu vel a fusce mi egestas nec. Sit sem massa mattis netus elit amet. Ipsum faucibus pellentesque.Lorem ipsum . ',
      open: false,
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetu.',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Netus augue ultrices eu vel a fusce mi egestas nec. Sit sem massa mattis netus elit amet. Ipsum faucibus pellentesque.Lorem ipsum . ',
      open: false,
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetu.',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Netus augue ultrices eu vel a fusce mi egestas nec. Sit sem massa mattis netus elit amet. Ipsum faucibus pellentesque.Lorem ipsum . ',
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="py-5">
      <div className="px-lg-5 px-md-3 px-1">
        <div className="text-center">
          <h2 className="fw-bold">{head}</h2>
          <p className="pGrey">
            {description}
            <span className="underlineHelpCenter">{span}</span>.
          </p>
        </div>
        <div className="faqs mt-5">
          {faqs.map((faq, index) => (
            <Faqquestion
              faq={faq}
              index={index}
              key={index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
