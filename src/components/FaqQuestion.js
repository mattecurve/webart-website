import React from 'react';
import '../styles/faq.css';
const Faqquestion = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      aria-hidden="true"
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default Faqquestion;
