import React from 'react';
import '../styles/pricingcard.css';

import { TiTick } from 'react-icons/ti';
const PricingCard = () => {
  const data1 = [
    {
      heading: 'Intro',
      icon: <TiTick size={20} className="me-2" />,
      link: [
        '1 Project',
        'Unlimited Collaborators',
        'Real-time collaboration',
        'Free code export',
        'Advanced Statistics',
      ],
      price: 100,
      month: 'month',
    },
    {
      heading: 'Base',
      icon: <TiTick size={20} className="me-2" />,
      link: [
        '1 Project',
        'Unlimited Collaborators',
        'Real-time collaboration',
        'Free code export',
        'Advanced Statistics',
      ],
      price: 100,
      month: 'month',
    },
    {
      heading: 'Pro',
      icon: <TiTick size={20} className="me-2" />,
      link: [
        '1 Project',
        'Unlimited Collaborators',
        'Real-time collaboration',
        'Free code export',
        'Advanced Statistics',
      ],
      price: 123,
      month: 'month',
    },
    {
      heading: 'Expertise',
      icon: <TiTick size={20} className="me-2" />,
      link: [
        '1 Project',
        'Unlimited Collaborators',
        'Real-time collaboration',
        'Free code export',
        'Advanced Statistics',
      ],
      price: 100,
      month: 'month',
    },
  ];

  return (
    <>
      <div className="">
        <div className="d-flex flex-wrap mainPrice justify-content-lg-between justify-content-md-center justify-content-center">
          {data1.map((item, i) => {
            return (
              <div key={i} className="pricingsize px-3">
                <div>
                  <h5 className="fw-bold" id="textHeading">
                    {item.heading}
                  </h5>
                </div>
                <ul className="list-unstyled textColor">
                  {item.link.map((links, i) => {
                    return (
                      <li key={i} className="mt-3 linkfontsize">
                        <span className="">{item.icon}</span>
                        {links}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <h5 className="fw-bold" id="changeColor">
                    {item.price}/
                    <span className="fontsizeMonth pGrey">{item.month}</span>
                  </h5>
                </div>
                <button id="buttonChoose" className="my-3">
                  Choose
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
