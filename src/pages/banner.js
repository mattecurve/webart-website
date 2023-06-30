import React from 'react';
import '../styles/banner.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import BannerImg from '../images/banner.png';

const Banner = () => {
  const head = 'Static. Fast. SEO - Friendly Website. Only 100 INR/month';
  const description =
    ' Welcome to our professional website service, offering you a static, fast, and SEO-friendly online presence at an affordable price of only 100 INR/month.';
  const buttonTitle = 'Start Building';

  return (
    <div className="py-5">
      <div className="px-lg-0 px-md-3 px-1">
        <div className="text-center m-auto">
          <h1 className="col-lg-8 col-md-9  col-12 m-auto display-5 fw-bold">
            {head}
          </h1>
          <p className="col-lg-5 col-md-10 col-12 m-auto mt-4">{description}</p>
          <div className="widthButton mt-4 m-auto">
            <button className="buttonDesign">
              {buttonTitle}
              <span className="ms-2">
                <HiOutlineArrowNarrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <img src={BannerImg} alt="img-banner" className="img-fluid imgBanner" />
      </div>
    </div>
  );
};

export default Banner;
