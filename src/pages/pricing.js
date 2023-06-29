import React from 'react';
import '../styles/pricing.css';
import annual from '../images/anual.png';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  return (
    <div className="py-5">
      <div className="container py-4">
        <div className="d-flex flex-column" id="pricingHere">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className="col-lg-5 col-md-8 col-12 text-center">
              <h2 className="fw-bold ">
                Affordable Plans for Every Budget, Choose Yours
              </h2>
              <p className="col-lg-10 col-md-10 col-12 mx-auto mt-2 ">
                We have several powerful plans to showcase your business and get
                discovered as a creative entrepreneurs. Everything you need.
              </p>
            </div>
            <div className="col-lg-4 col-12 col-md-6 col-sm-8  d-flex flex-row justify-content-evenly">
              <h6 className="my-auto fw-bold">Bill Monthly</h6>
              <span>
                <img src={annual} alt="annual-img" className="img-fluid" />
              </span>
              <h6 className="fw-normal my-auto">Bill Annually</h6>
            </div>
          </div>
          <div className="mt-5">
            <PricingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
