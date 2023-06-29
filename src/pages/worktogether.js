import React from 'react';
import '../styles/worktogether.css';
import ImageTogether from '../images/ImageTogether.png';

const WorkTogether = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <div className="col-lg-6 col-md-8 col-12 text-center">
              <h2 className="h2FontStyle mx-auto text-center col-lg-10  col-12">
                Work together with your team and set your wildest ideas in
                motion
              </h2>
              <p>
                We help teams create better websites from start to finish,
                together.
              </p>
            </div>
          </div>
          <div className="mt-lg-5 mt-md-3 mt-0">
            <div className="d-flex justify-content-center">
              <img
                src={ImageTogether}
                className="imageTogether"
                alt="work-together"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
