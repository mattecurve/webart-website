import React from 'react';
import '../styles/steps.css';
import stepImg from '../images/Rectangle.png';
const SimpleSteps = () => {
  const stepData = [
    {
      icon: stepImg,
      title: 'Register',
      description:
        'Register using your email address, verify email address and login.',
    },
    {
      icon: stepImg,
      title: 'Select Theme and Customize',
      description:
        'Select theme and customize as per your needs.',
    },
    {
      icon: stepImg,
      title: 'Launch',
      description:
        'Launch your website or landing page with either BuildSite.io subdomain or your personal or business domain.',
    },
  ];

  return (
    <div className="py-5 steps-container" style={{ backgroundColor: '#16163f' }}>
      <div className="px-lg-5 px-md-3 px-1 my-4 text-white">
        <div className="">
          <h2 className="">Start using BuildSite.io in 3 simple steps</h2>
          <p className="text-white col-lg-4 col-md-8 col-sm-8 col-12">
            Launch your website in minutes
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-5">
          {stepData.map((item, i) => {
            return (
              <div className="col-lg-4 col-md-4 col-12 p-2">
                <div className="sizeStepBox bgSteps ">
                  <div className="mt-4 circle">{i + 1}</div>
                  <h3 className="mt-3">{item.title}</h3>
                  <p className="pGrey">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
