import React, { useState } from 'react';
import '../styles/usercarousel.css';
import UserProfile from '../images/userProfile.png';
import { Carousel } from 'react-bootstrap';
const UserSpeak = () => {
  const userReview = [
    {
      profile: UserProfile,
      name: 'Prateek Agarwal',
      description:
        '  We have launched our business website withing few minutes of using webart.io. The website is super fast and cool.',
    },
    {
      name: 'Harish Sharma',
      profile: UserProfile,
      description:
        '  We have launched our business website withing few minutes of using webart.io. The website is super fast and cool.(2)',
    },
    {
      profile: UserProfile,
      name: 'john Vick',
      description:
        '  We have launched our business website withing few minutes of using webart.io. The website is super fast and cool.(3)',
    },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="">
          <h2 className="fw-bold m-auto col-lg-4 col-md-6 col-sm-8 col-12  text-center">
            Here's what our users speak about us.
          </h2>
          <p className="col-lg-6 col-12 text-center m-auto">
            Join thousands of teams who already use webart.io.
          </p>
        </div>
        <div className="mt-5">
          <Carousel indicators={false}>
            {userReview.map((item, i) => {
              return (
                <Carousel.Item data-bs-theme="dark">
                  <div className="container ">
                    <div className="col-lg-9  col-12 mx-auto">
                      <div className="d-flex flex-wrap rounded shadow  px-3">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="my-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <span className="">
                                <img
                                  src={item.profile}
                                  alt="user-profile"
                                  className="img-fluid imgUserWidth"
                                />
                              </span>
                              <h6 className="my-auto ms-2">{item.name}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="imgBgUser my-3 d-flex justify-content-center align-items-center">
                            <p className="p-4 text-white">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default UserSpeak;
