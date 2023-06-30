import { Link } from 'gatsby';
import React, { useState } from 'react';
import '../styles/navbar.css';
import humberg from '../images/humberg.png';
import cross from '../images/cross.png';
import { BsArrowRight } from 'react-icons/bs';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //
  return (
    <>
      <header className="">
        <div className="px-lg-5 px-md-3 px-2 navbar d-flex justify-content-between">
          <div className="d-flex">
            <Link
              style={{ textDecoration: 'none' }}
              to="/"
              className="navbar-logo"
            >
              <h4 className="webart">BuildSite.io</h4>
            </Link>

            <ul className={click ? 'nav-menu active' : 'nav-menu my-auto'}>
              <div
                className="menu-icon"
                onClick={handleClick}
                aria-hidden="true"
              >
                {click ? (
                  <img
                    src={cross}
                    className="img-fluid menu-icons "
                    style={{ position: 'absolute', top: '30px', right: '40px' }}
                    alt="menu-icon"
                  />
                ) : (
                  ''
                )}
              </div>
              {/* <li className="nav-item mx-3 navbar-dropdown">
                <Link to="#!" className="nav-links" onClick={closeMobileMenu}>
                  Products */}
              {/* <span className="ms-1">
                    <BsChevronDown className="chevron-icon" size={20} />
                  </span> */}
              {/* </Link> */}
              {/* <div style={{}} className="navbar-dropdown-content p-5">
                  <h6 className="bg-transparent underline-for-heading">
                    Option 1
                  </h6>
                </div> */}
              {/* </li> */}
              <li className="nav-item mx-3">
                <Link to="#!" className="nav-links" onClick={closeMobileMenu}>
                  Features
                </Link>
              </li>

              {/* <li className="nav-item mx-3">
                <Link
                  to="#pricing"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </li> */}
              <li className="nav-item mx-3">
                <Link to="#!" className="nav-links" onClick={closeMobileMenu}>
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="d-none d-xl-block"
            style={{
              width: '250px',
            }}
          >
            <Link to="#!">
              <button className="buttonUnDesign me-2">
                Log In
                <span className="ms-2">
                  <BsArrowRight size={20} />
                </span>
              </button>
            </Link>
            <Link to="/signin">
              <button className="buttonDesign ">
                Sign Up
                <span className="ms-2">
                  <BsArrowRight size={20} />
                </span>
              </button>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick} aria-hidden="true">
            {click ? (
              <img
                src={humberg}
                className="img-fluid menu-icons"
                alt="menu-icon"
              />
            ) : (
              <img
                src={humberg}
                className="img-fluid menu-icons"
                alt="menu-icon"
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
