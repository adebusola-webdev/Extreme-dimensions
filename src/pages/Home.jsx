import React from 'react'
import { Nav } from '../component/Nav'
import { Link } from 'react-router-dom'

import '../styles/home.css'

export const Home = () => {
    return (
        <>
            <div className="header__section">
                <div className="header__inner__con">
                    <Nav />
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

            </div>
            <div className="video__section">
            <div className="video__con">
                <div className="inner__video__con"></div>
            </div>
            </div>
            <div className="who__section">
                 <div className="who__inner__con">
                   
                    <div className='who__more__info'>
                        <div className='who_left_con'>
                        <h1 className="who__head__text">
                    Who we are
                    </h1>
                    <div className="img__con">
                            <img src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720278165/picture_1_wqmmkw.png" alt="" />
                        </div>
                        </div>
                   
                      
                        <div className="who__text__con">
                        <p className='who__info__text'>
                        Xtreme Dimensions is a leading architectural firm based in Nigeria, specializing in creating exceptional spaces that blend creativity with practicality. We are dedicated to transforming visions into reality through innovative design solutions and meticulous craftsmanship. Our integrated approach combines architecture, interiors, engineering, and landscaping to deliver innovative and sustainable solutions. At Xtreme Dimensions, we don’t just build structures; we craft experiences that resonate with beauty, functionality, and enduring quality.
                        </p>

                        <p  className='learn'> <Link className='who_link'>Learn more about us</Link></p>
                        </div>
                       

                    </div>
                 </div>
            </div>
           
        </>
    )
}
