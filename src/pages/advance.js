import React from 'react';
import '../styles/advance.css';
import selectArrow from '../images/selectArrow.png';
import advanceImg1 from '../images/advanceImg.png';
import advanceImg2 from '../images/advanceImg2.png';
import ThemeButton from '../components/button';

const AdvanceDesign = () => {
  const head = 'Features';
  const buttonTitle = 'Get Started Now';

  const advanceData1 = [
    {
      img: advanceImg1,
      arrowImg: selectArrow,
      heading: 'Pre-built themes',
      description:
        'Our library of pre-built themes gives you a head start on creating a professional-looking website.',
    },
  ];
  const advanceData2 = [
    {
      img: advanceImg2,
      arrowImg: selectArrow,
      heading: 'Drag-and-drop builder',
      description:
        'Our drag-and-drop builder makes it easy to create a website without any coding experience.',
    },
  ];
  const advanceData3 = [
    {
      img: advanceImg1,
      arrowImg: selectArrow,
      heading: 'Customize theme',
      description:
        "Your website's theme is the foundation of your brand. It's the first thing visitors see, and it sets the tone for their entire experience. That's why it's important to customize your theme to match your brand's colors, fonts, and overall look and feel.",
    },
  ];
  const advanceData4 = [
    {
      img: advanceImg2,
      arrowImg: selectArrow,
      heading: 'SEO-friendly',
      description:
        'Our themes are optimized for search engines, so your website will be more likely to appear in search results.',
    },
  ];

  return (
    <div className="py-5" id="features">
      <div className="px-lg-5 px-md-3 px-1">
        <div className="text-center">
          <h2 className=" fw-bold">{head}</h2>
          <p className="col-lg-6 col-md-10 col-12 m-auto">
          With our unique features, you can build and launch a website quickly and easily. Start building your website today!
          </p>
        </div>
        <div>
          {advanceData1.map((item, i) => {
            return (
              <div key={i} className="d-flex flex-wrap extraMargin">
                <div className="col-lg-7  col-md-6 col-12 d-flex justify-content-start align-items-center">
                  <div className="">
                    <img src={item.img} alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center mt-lg-0 mt-md-0 mt-5">
                  <div className="">
                    <img
                      src={item.arrowImg}
                      alt="selectArrow"
                      className="img-fluid"
                    />
                    <h2 className="fw-bold col-8 my-3">{item.heading}</h2>
                    <p>{item.description}</p>
                    <div className="widthButton ">
                      <ThemeButton arrow={true} buttonTitle={buttonTitle}></ThemeButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {advanceData2.map((item, i) => {
            return (
              <div
                key={i}
                className="d-flex flex-wrap flex-row-reverse extraMargin"
              >
                <div className="col-lg-7 col-md-6 col-12">
                  <div className="d-flex justify-content-end">
                    <img src={item.img} alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center mt-lg-0 mt-md-0 mt-5">
                  <div className="">
                    <img
                      src={item.arrowImg}
                      alt="selectArrow"
                      className="img-fluid"
                    />
                    <h2 className="fw-bold col-8 my-3">{item.heading}</h2>
                    <p>{item.description}</p>
                    <div className="widthButton ">
                      <ThemeButton arrow={true} buttonTitle={buttonTitle}></ThemeButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {advanceData3.map((item, i) => {
            return (
              <div key={i} className="d-flex flex-wrap extraMargin">
                <div className="col-lg-7  col-md-6 col-12 d-flex justify-content-start align-items-center">
                  <div className="">
                    <img src={item.img} alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center mt-lg-0 mt-md-0 mt-5">
                  <div className="">
                    <img
                      src={item.arrowImg}
                      alt="selectArrow"
                      className="img-fluid"
                    />
                    <h2 className="fw-bold col-8 my-3">{item.heading}</h2>
                    <p>{item.description}</p>
                    <div className="widthButton ">
                      <ThemeButton arrow={true} buttonTitle={buttonTitle}></ThemeButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {advanceData4.map((item, i) => {
            return (
              <div
                key={i}
                className="d-flex flex-wrap flex-row-reverse extraMargin"
              >
                <div className="col-lg-7 col-md-6 col-12">
                  <div className="d-flex justify-content-end">
                    <img src={item.img} alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center mt-lg-0 mt-md-0 mt-5">
                  <div className="">
                    <img
                      src={item.arrowImg}
                      alt="selectArrow"
                      className="img-fluid"
                    />
                    <h2 className="fw-bold col-8 my-3">{item.heading}</h2>
                    <p>{item.description}</p>
                    <div className="widthButton ">
                      <ThemeButton arrow={true} buttonTitle={buttonTitle}></ThemeButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdvanceDesign;
