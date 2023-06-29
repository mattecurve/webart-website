import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoBehance,
  BiGlobe,
} from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import '../styles/footer.css';
import { Link } from 'gatsby';
const Footer = () => {
  const iconSocialMedia = [
    { socialIcon: <BiLogoFacebook size={25} />, classes: 'iconStyleFacebook' },
    {
      socialIcon: <AiOutlineInstagram size={25} />,
      classes: 'iconStyleInstagram',
    },
    {
      socialIcon: <AiOutlineTwitter size={25} />,
      classes: 'iconStyleTwitter',
    },
    { socialIcon: <BiLogoLinkedin size={25} />, classes: 'iconStyleLinkedin' },
    { socialIcon: <BiLogoBehance size={25} />, classes: 'iconStyleBehance' },
    { socialIcon: <BiGlobe size={25} />, classes: 'iconStyleGlobe' },
  ];

  return (
    <div className="pt-5 ">
      <div className="px-lg-5 px-md-3 px-2 ">
        <div className="d-flex flex-wrap pb-5">
          <div className="col-lg-7  col-12">
            <div className="">
              <h3 className="fw-bold  py-2">webart.io</h3>
              <div className="my-4 ">
                <h6 className="fw-bold my-auto">Inquries</h6>
                <p className="my-auto">mail@webart.com</p>
              </div>
              <div className="">
                <ul
                  style={{ columnGap: '30px' }}
                  className="d-flex list-unstyled"
                >
                  <Link to="!#" className="LinkGatsby">
                    <li className="fw-bold">Products</li>
                  </Link>
                  <Link to="!#" className="LinkGatsby">
                    <li className="fw-bold">Features</li>
                  </Link>
                  <Link to="#pricingHere" className="LinkGatsby">
                    <li className="fw-bold">Pricing</li>
                  </Link>
                  <Link to="!#" className="LinkGatsby">
                    <li className="fw-bold">Resources</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5  my-auto col-12">
            <div className="mt-lg-0 mt-4">
              <h2 className="">
                Don’t miss the chance get a demo from our team
              </h2>
              <div className="col-lg-12 col-md-9 col-sm-9  d-flex border-bottom align-items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="inputbox py-1"
                />
                <HiOutlineArrowNarrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="borderTopFooter  py-3">
        <div className="px-lg-5 px-md-3 px-1 ">
          <div className="d-flex flex-wrap align-items-center">
            <div className="col-lg-6 col-12">
              <p className="my-auto">@webaer.io. All rights reserved</p>
            </div>
            <div className="col-lg-6 col-12">
              <div
                style={{ columnGap: '20px' }}
                className=" gapIcon d-flex flex-wrap justify-content-start justify-content-lg-end  mt-lg-0 mt-2"
              >
                {iconSocialMedia.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`iconStyle mt-lg-0 mt-2 cursor-pointer ${item.classes}`}
                    >
                      {item.socialIcon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
