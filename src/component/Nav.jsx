import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
  return (
    <>
      <div className="nav__container">
        <div className="logo__con">
          {" "}
          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720281552/logo_hblomh.png"
            alt=""
          />{" "}
        </div>
        <ul className="nav__list">
          <li className="nav__links">
            <Link to="/" className="link">
              About us
            </Link>
          </li>
          <li className="nav__links">
            <Link to="/" className="link">
              Service
            </Link>
          </li>

          <li className="nav__links">
            <Link to="/" className="link">
              Portfolio
            </Link>
          </li>
          <li className="nav__links">
            <Link to="/contact" className="link">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
