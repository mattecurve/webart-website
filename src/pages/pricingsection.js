import React, { useState } from 'react';
import '../styles/pricing.css';
import annual from '../images/anual.png';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  const head = 'Pricing';
  const description =
    '  We have several powerful plans to showcase your business and get discovered as a creative entrepreneurs. Everything you need.';

  return (
    <div className="py-5">
      <div className="container py-4">
        <div className="d-flex flex-column" id="pricing">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className="col-lg-5 col-md-8 col-12 text-center">
              <h2 className="fw-bold ">{head}</h2>
              {/* <p className="col-lg-10 col-md-10 col-12 mx-auto mt-2 ">
                {description}
              </p> */}
            </div>
          </div>
          <div className="">
            <PricingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
