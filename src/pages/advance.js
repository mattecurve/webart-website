import React from 'react';
import '../styles/advance.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import selectArrow from '../images/selectArrow.png';
import advanceImg1 from '../images/advanceImg.png';
import advanceImg2 from '../images/advanceImg2.png';
const AdvanceDesign = () => {
  const head = 'Advanced Desgin Features';
  const buttonTitle = 'Start Building';

  const advanceData1 = [
    {
      img: advanceImg1,
      arrowImg: selectArrow,
      heading: 'Drag-and-Drop Interface',
      description:
        ' Emphasize the simplicity of designing a website by dragging and dropping elements such as text, images, videos, and forms onto the page',
    },
  ];
  const advanceData2 = [
    {
      img: advanceImg2,
      arrowImg: selectArrow,
      heading: 'Drag-and-Drop Interface (2)',
      description:
        ' Emphasize the simplicity of designing a website by dragging and dropping elements such as text, images, videos, and forms onto the page (2)',
    },
  ];

  return (
    <div className="py-5">
      <div className="px-lg-5 px-md-3 px-1">
        <div className="text-center">
          <h2 className=" fw-bold">{head}</h2>
          <p className="col-lg-6 col-md-10 col-12 m-auto">
            We ensure that your website not only showcases your business in a
            highly polished manner but also delivers a seamless user experience.
            Here's what you can expect from our Features..
          </p>
        </div>
        <div>
          {advanceData1.map((item, i) => {
            return (
              <div key={i} className="d-flex flex-wrap extraMargin">
                <div className="col-lg-7 col-md-6 col-12">
                  <div>
                    <img src={item.img} alt="img" className="img-fluid  " />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center">
                  <div className="">
                    <img
                      src={item.arrowImg}
                      alt="selectArrow"
                      className="img-fluid"
                    />
                    <h2 className="fw-bold col-8 my-3">{item.heading}</h2>
                    <p>{item.description}</p>
                    <button className="buttonDesign mt-2 ">
                      Start Building
                      <span className="ms-2">
                        <HiOutlineArrowNarrowRight size={20} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
              <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="">
                  <img
                    src={item.arrowImg}
                    alt="selectArrow"
                    className="img-fluid"
                  />
                  <h2 className="fw-bold col-8 my-3">{item.heading}</h2>
                  <p>{item.description}</p>
                  <button className="buttonDesign mt-2 ">
                    {buttonTitle}
                    <span className="ms-2">
                      <HiOutlineArrowNarrowRight size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvanceDesign;
