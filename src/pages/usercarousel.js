import React, { useState } from 'react';
import '../styles/usercarousel.css';
import ImageStar from '../images/star.png';
import UserProfile from '../images/userProfile.png';
import { Carousel } from 'react-bootstrap';
const UserSpeak = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="">
          <h2 className="fw-bold m-auto col-lg-4 col-md-6 col-sm-8 col-12  text-center">
            Here's what our users speak about us.
          </h2>
          <p className="col-lg-6 col-12 text-center m-auto">
            Join thousands of teams who already use Webart.io
          </p>
        </div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          fade
          className="mt-5"
        >
          <Carousel.Item>
            <div className=" d-flex flex-wrap border rounded">
              <div className="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center">
                <div
                  style={{ width: '400px', height: '280px' }}
                  className="my-lg-3 my-1 d-flex flex-column justify-content-between  px-lg-3 px-4 py-lg-3 py-3"
                >
                  <div className="">
                    <img
                      src={ImageStar}
                      alt=""
                      className="img-fluid imgStarWidth"
                    />
                    <span className="ms-2 fw-bold">Stars</span>
                  </div>
                  <div className="d-flex">
                    <img
                      src={UserProfile}
                      alt=""
                      className="img-fluid imgUserWidth"
                    />
                    <div className="ms-2">
                      <span className="fw-bold">Sarah Johns</span>
                      <p className="ceoTag">CEO - Stars INC </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center">
                <div
                  style={{ width: '400px', height: '280px' }}
                  className=" my-lg-3 my-1  d-flex justify-content-center align-items-center px-3"
                >
                  <p className="py-5 px-3 rounded bgImage">
                    Lorem ipsum dolor sit amet consectetur. Sagittis non est
                    integer nibh libero ac turpis sit. In sociis metus est
                    habitasse neque nullam velit viverra. Mattis commodo ac
                    sollicitudin sit consectetur feugiat tellus. A etiam
                    habitant tortor id vestibulum id.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" d-flex flex-wrap border rounded">
              <div className="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center">
                <div
                  style={{ width: '400px', height: '280px' }}
                  className=" my-lg-3 my-1   d-flex flex-column justify-content-between  px-lg-3 px-4 py-lg-3 py-3"
                >
                  <div className="">
                    <img
                      src={ImageStar}
                      alt=""
                      className="img-fluid imgStarWidth"
                    />
                    <span className="ms-2 fw-bold">Stars (2)</span>
                  </div>
                  <div className="d-flex">
                    <img
                      src={UserProfile}
                      alt=""
                      className="img-fluid imgUserWidth"
                    />
                    <div className="ms-2">
                      <span className="fw-bold">Sarah Johns (2)</span>
                      <p className="ceoTag">CEO - Stars INC (2) </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center">
                <div
                  style={{ width: '400px', height: '280px' }}
                  className=" my-lg-3 my-1  d-flex justify-content-center align-items-center px-3"
                >
                  <p className="py-5 px-3 rounded bgImage">
                    Lorem ipsum dolor sit amet consectetur. Sagittis non est
                    integer nibh libero ac turpis sit. In sociis metus est
                    habitasse neque nullam velit viverra. Mattis commodo ac
                    sollicitudin sit consectetur feugiat tellus. A etiam
                    habitant tortor id vestibulum id (2).
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" d-flex flex-wrap border rounded">
              <div className="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center">
                <div
                  style={{ width: '400px', height: '280px' }}
                  className=" my-lg-3 my-1   d-flex flex-column justify-content-between  px-lg-3 px-4 py-lg-3 py-3"
                >
                  <div className="">
                    <img
                      src={ImageStar}
                      alt=""
                      className="img-fluid imgStarWidth"
                    />
                    <span className="ms-2 fw-bold">Stars (3)</span>
                  </div>
                  <div className="d-flex">
                    <img
                      src={UserProfile}
                      alt=""
                      className="img-fluid imgUserWidth"
                    />
                    <div className="ms-2">
                      <span className="fw-bold">Sarah Johns (3)</span>
                      <p className="ceoTag">CEO - Stars INC (3)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center">
                <div
                  style={{ width: '400px', height: '280px' }}
                  className="my-lg-3 my-1  d-flex justify-content-center align-items-center px-3"
                >
                  <p className="py-5 px-3 rounded bgImage">
                    Lorem ipsum dolor sit amet consectetur. Sagittis non est
                    integer nibh libero ac turpis sit. In sociis metus est
                    habitasse neque nullam velit viverra. Mattis commodo ac
                    sollicitudin sit consectetur feugiat tellus. A etiam
                    habitant tortor id vestibulum id (3).
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default UserSpeak;
