import React from 'react';
import '../styles/banner.css';
import BannerImg from '../images/Illustration.png';
import ThemeButton from '../components/button';

const Banner = () => {
  const head = 'Build Your Website in Minutes with Our Drag-and-Drop Builder';
  const description =
    'No coding required. Just select a pre-built theme, add your branding and purpose text, images, and connect your domain. Your website will be live within minutes!';
  const buttonTitle = 'Get Started Now';

  return (
    <div className="py-5 mt-5">
      <div className="px-lg-0 px-md-3 px-1">
        <div className="text-center m-auto">
          <h1 className="col-lg-8 col-md-9  col-12 m-auto display-5 fw-bold">
            {head}
          </h1>
          <p className="col-lg-5 col-md-10 col-12 m-auto mt-4">{description}</p>
          <div className="widthButton mt-4 m-auto">
            <ThemeButton arrow={true} buttonTitle={buttonTitle}></ThemeButton>
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
