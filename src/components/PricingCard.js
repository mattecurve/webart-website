import React, { useState } from 'react';
import '../styles/pricingcard.css';

import { TiTick } from 'react-icons/ti';
const PricingCard = () => {
  const billMonthly = 'Bill Monthly';
  const annualMonthly = 'Bill Annually';

  const data1 = [
    {
      heading: 'Starter',
      icon: <TiTick size={20} className="me-2" />,
      link: [
        '1 Website',
        'Pre-Built Components',
        'Drag-and-Drop Interface',
        'Customize theme',
        'SEO Friendly',
        'Static Website',
        'Custom Domain',
      ],
      price: 100,
      month: 'INR/month',
      price2: 1000,
      month2: 'INR/year',
    },
    {
      heading: 'Pro',
      icon: <TiTick size={20} className="me-2" />,
      link: [
        '1 Website',
        'Pre-Built Components',
        'Drag-and-Drop Interface',
        'Customize theme',
        'SEO Friendly',
        'Static Website',
        'Custom Domain',
        ' Contact Form / Lead Form',
        ' Analytics,',
      ],
      price: 200,
      month: 'INR/month',
      price2: 2000,
      month2: 'INR/year',
    },
  ];

  const [toggleButton, setToggleButton] = useState(false);

  const handleClick = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <>
      <div className="">
        <div className="mx-auto col-lg-4 col-12 col-md-6 col-sm-8  d-flex flex-row justify-content-evenly">
          <h6 className="my-auto fw-bold">{billMonthly}</h6>
          <div className="toggle" onClick={handleClick}>
            {toggleButton ? (
              <div className="toggle_left"></div>
            ) : (
              <div className="toggle_right"></div>
            )}
          </div>
          <h6 className="fw-normal my-auto">{annualMonthly}</h6>
        </div>
        <div
          className="mt-3 d-flex flex-wrap mainPrice justify-content-center"
          style={{ columnGap: '80px' }}
        >
          {data1.map((item, i) => {
            return (
              <div
                key={i}
                className="pricingSize py-4 px-3 d-flex flex-column justify-content-between"
              >
                <div>
                  <h5 className="fw-bold " id="textHeading">
                    {item.heading}
                  </h5>
                </div>
                <ul
                  className="list-unstyled textColor"
                  style={{ height: '400px' }}
                >
                  {item.link.map((links, i) => {
                    return (
                      <li key={i} className="mt-3 linkfontsize">
                        <span className="">{item.icon}</span>
                        {links}
                      </li>
                    );
                  })}
                </ul>
                <div className="d-flex justify-content-between px-2">
                  {toggleButton ? (
                    <h5 className="fw-bold" id="textHeading">
                      {item.price}&nbsp;
                      <span className="fontsizeMonth pGrey">{item.month}</span>
                    </h5>
                  ) : (
                    <h5 className="fw-bold" id="textHeading">
                      {item.price2}&nbsp;
                      <span className="fontsizeMonth pGrey">{item.month2}</span>
                    </h5>
                  )}
                </div>
                <button id="buttonChoose" className="">
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
