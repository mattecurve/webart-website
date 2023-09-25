import React from 'react';
import { Link } from 'gatsby';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ThemeButton = ({ url, classes, targetAttr, arrow, buttonTitle }) => {
  const defaultUrl = 'https://app.buildsite.io/';
  const className = `buttonDesign ${classes}`;
  const target = targetAttr || '_blank';
  return (
    <>
        <Link to={url || defaultUrl} className={className} target={target}>
              {buttonTitle}
              {arrow && (
                <span className="ms-2">
                    <HiOutlineArrowNarrowRight size={20} />
                </span>
              )}
        </Link>
    </>
  );
};

export default ThemeButton;
