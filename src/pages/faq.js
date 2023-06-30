import React, { useState } from 'react';
import Faqquestion from '../components/FaqQuestion';
import '../styles/faq.css';
import { Link } from 'gatsby';
const Faq = () => {
  const head = 'Frequently Asked Questions';
  const description = 'Can’t find the answers here?';
  const span = 'Contact Us.';

  const [faqs, setFaqs] = useState([
    {
      question: 'Is it easy to build a website?',
      answer: '',
      open: false,
    },
    {
      question: 'Can I create a website without knowing coding?',
      answer:
        'Yes, our website builder have a library of themes for most of the use case and have a library of components you can use to customize your website. Pro users can connect with out team for any help.',
      open: false,
    },
    {
      question: 'Should I use a website builder or hire a web developer?',
      answer:
        'You can use a website builder if you know how to setup a domain. If your website is complex and you have less knowledge about domain and website management then your should hire a developer.',
      open: false,
    },
    {
      question: 'How do I build and host my site for free?',
      answer:
        'You can launch your website for free with webart.io subdomain. You will have to pay to launch your website on custom domain.',
      open: false,
    },
    {
      question: 'Is website built on webart.io SEO optimized?',
      answer: 'Yes, all the websites launched on webart.io are SEO optimized.',
      open: false,
    },
    {
      question: 'Can I use webart.io to create a landing page?',
      answer: 'Yes, you can create a landing or a website.',
      open: false,
    },
    {
      question: 'Do webart.io website work on mobile?',
      answer: 'Yes, all the websites are mobile friendly.',
      open: false,
    },
    {
      question: 'Can I export my data from the webart.io platform?',
      answer: 'Yes, you can export all the leads data.',
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
            {description}&nbsp;
            <Link className="LinkGatsby" to="#contact">
              <span className="underlineHelpCenter">{span}</span>.
            </Link>
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
