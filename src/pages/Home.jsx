import React from 'react'
import { Nav } from '../component/Nav'

import '../styles/home.css'

export const Home = () => {
  return (
    <>
    <div className="header__section">
        <Nav/>
        <div className="header__text__con">
            <h1 className='header__text'>Redefining Luxury Living  <span>Through Architectural </span>
            Brilliance
            </h1>
           
        </div>
        <div className="header__mini__text">
                <div className="consultation__con">
                    <p className='consultation__text'>we don’t just build structures; we craft experiences that resonate with beauty, functionality, and enduring quality.</p>
                     
                     

                     <a href="" ><div className='btn'>
                     <p>Book a Free Consultation</p> <p>/</p></div></a>

                </div>
                <div className="socials__icons">
                    <p>/</p>
                    <p>/</p>
                    <p>/</p>
                </div>
            </div>
    </div>
    </>
  )
}
