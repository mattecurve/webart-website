import React from 'react';
import { PiArrowUpRightLight } from 'react-icons/pi';

const Help = () => {
  const helpData = [
    {
      head: 'Help',
      subheading: 'Contact us as contact@webart.io.',
    },
    {
      head: 'Contact',
      subheading: 'Contact us as contact@webart.io.',
    },
    {
      head: 'Get to know us',
      subheading: 'Contact us as contact@webart.io.',
    },
    {
      head: 'Hire an Expert',
      subheading: 'Contact us as onkar@mattecurve.com',
    },
  ];
  return (
    <div className="py-5">
      <div className="px-lg-5 px-md-3 px-0">
        <div
          style={{ rowGap: '40px' }}
          className="d-flex flex-wrap bg-dark text-white py-5 rounded"
        >
          {helpData.map((item, i) => {
            return (
              <div key={i} className="col-lg-6 col-md-12 col-12  p-4">
                <div className="">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="">{item.head}</h2>
                    <span className="">
                      <PiArrowUpRightLight size={60} />
                    </span>
                  </div>
                  <p className="text-white">{item.subheading}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Help;
