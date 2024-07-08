import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import '../styles/nav.css'
import { useState } from "react";


export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
     <div className="home__nav">
        <Link to='/'><img src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720281552/logo_hblomh.png" alt="" /> </Link>

        <ul className={` ${isOpen ? "open" : ""}`}>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About us</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="https://github.com/adebusola-webdev">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="https://github.com/adebusola-webdev">Contact us</NavLink>
          </li>

          <div className="dropdown">
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
          </div>
        </ul>

        <button className={`${isOpen ? "menu" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  )
}
