import React, { useState } from 'react';
import Faqquestion from '../components/FaqQuestion';
import '../styles/faq.css';
import { Link } from 'gatsby';
const Faq = () => {
  const head = 'Frequently Asked Questions';
  const description = 'Can’t find the answers here?';
  const span = 'Contact Us';

  const [faqs, setFaqs] = useState([
    {
      question: 'Is it easy to build a website with BuildSite.io?',
      answer: 'Yes, it is very easy to build a website with BuildSite.io. Our website builder has a drag-and-drop interface that makes it easy to create a website without any coding experience. We also have a library of pre-built themes that you can use to get started quickly.',
      open: true,
    },
    {
      question: 'Can I create a website without knowing how to code?',
      answer:
        "Yes, you can create a website with BuildSite.io even if you don't know how to code. Our website builder has a drag-and-drop interface that makes it easy to create a website without any coding experience.",
      open: true,
    },
    {
      question: 'Should I use a website builder or hire a web developer?',
      answer:
        'If you are looking for a quick and easy way to build a website, then a website builder is a good option. However, if you need a more complex website or you need help with SEO, then you may want to hire a web developer.',
      open: true,
    },
    {
      question: 'How do I build and host my site for free?',
      answer:
        'You can build and host your site for free with BuildSite.io, but you will have a BuildSite.io subdomain. If you want to host your site on a custom domain, then you will need to upgrade to a paid plan.',
      open: true,
    },
    {
      question: 'Is my website built on BuildSite.io SEO optimized?',
      answer:
        'Yes, all the websites built on BuildSite.io are SEO optimized. We use a variety of SEO techniques to help your website rank higher in search results.',
      open: true,
    },
    {
      question: 'Can I use BuildSite.io to create a landing page?',
      answer: 'Yes, you can use BuildSite.io to create a landing page. Landing pages are a great way to promote your products or services and collect leads.',
      open: true,
    },
    {
      question: 'Do BuildSite.io websites work on mobile?',
      answer: 'Yes, all the websites built on BuildSite.io are mobile friendly. This means that your website will look great on any device, including smartphones and tablets.',
      open: true,
    },
    {
      question: 'Can I export my data from the BuildSite.io platform?',
      answer: 'Yes, you can export all of your data from the BuildSite.io platform. This includes your website content, leads, and analytics data.',
      open: true,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        // if (i === index) {
        //   faq.open = !faq.open;
        // } else {
        //   faq.open = false;
        // }

        return faq;
      })
    );
  };
  return (
    <div className="py-5">
      <div className="px-lg-5 px-md-3 px-1">
        <div className="text-center">
          <h2 className="fw-bold">{head}</h2>
          {/* <p className="pGrey">
            {description}&nbsp;
            <Link className="LinkGatsby" to="#contact">
              <span className="underlineHelpCenter">{span}</span>.
            </Link>
          </p> */}
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
