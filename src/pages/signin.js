import React from 'react';
import '../styles/signin.css';
import Layout from '../components/Layout';
import Help from '../components/Help';

const SignIn = () => {
  return (
    <Layout>
      {' '}
      <div className="py-5">
        <div className="px-lg-5 px-md-3 px-1 extraMargin">
          <div className="d-flex flex-column ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-center">Sign in</h2>
              <button className="signInButtonSigninWithgoogle mt-5">
                Sign in with Google
              </button>
            </div>
            <p className="my-4 extraFontsizePara text-center">
              or sign in using your email
            </p>
            <div className="m-auto  inputButtonDesign d-flex justify-content-center align-items-center">
              <input
                type="email"
                placeholder="|Email address"
                className="inputDesign mx-3"
              />
              <button className="signInButton">Continue</button>
            </div>
            <div className="text-center mt-4">
              <p className="extraFontsizePara ">
                By pressing ‘Continue’ you agree to our Terms & Conditions
              </p>
              <p className="extraFontsizePara ">
                You don’t have an account?{' '}
                <span className="sigInColor">Sign up</span> for free.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Help />
    </Layout>
  );
};

export default SignIn;
