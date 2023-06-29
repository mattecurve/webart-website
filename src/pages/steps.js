import React from 'react';
import '../styles/steps.css';
const SimpleSteps = () => {
  return (
    <div className="py-5" style={{ backgroundColor: '#171719' }}>
      <div className="px-lg-5 px-md-3 px-1 my-4 text-white">
        <div className="">
          <h2 className="">Start using Webart in 3 simple steps</h2>
          <p className="text-white col-lg-4 col-md-8 col-sm-8 col-12">
            We ensure that your website not only showcases your business in a
            highly polished manner.
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-5">
          <div className="col-lg-4 col-md-4 col-12  p-2 ">
            <div className="sizeStepBox bgSteps ">
              <div className="mt-4">Icon</div>
              <h3 className="mt-3">Built with speed in </h3>
              <p className="pGrey">
                Built with speed in Built with speed in Built with speed in
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 p-2  ">
            <div className="sizeStepBox bgSteps ">
              <div className="mt-4">Icon</div>
              <h3 className="mt-3">Built with speed in </h3>
              <p className="pGrey">
                Built with speed in Built with speed in Built with speed in
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12  p-2  ">
            <div className=" sizeStepBox bgSteps ">
              <div className=" rounded">
                <h4 className="text-lg-start text-md-start text-center">
                  Lorem ipsum dolor sit amet consectetur.{' '}
                </h4>
              </div>
              <div className=" mt-5 rounded">
                <h4 className="text-lg-start text-md-start text-center">
                  Lorem ipsum dolor sit amet consectetur.{' '}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
