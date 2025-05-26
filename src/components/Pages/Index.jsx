import React from 'react'

import videoBg from "./../../assets/bg-video.mp4"
import titleShape from "./../../assets/title-shape.svg"
import hero from "./../../assets/hero-image.png"
import heroIcon1 from "./../../assets/icon-hero-img-1.svg"
import heroIcon2 from "./../../assets/icon-hero-img-2.svg"

import logo1 from "./../../assets/client-logo-1.svg"
import logo2 from "./../../assets/client-logo-2.svg"
import logo3 from "./../../assets/client-logo-3.svg"
import logo4 from "./../../assets/client-logo-4.svg"
import logo5 from "./../../assets/client-logo-5.svg"
import logo6 from "./../../assets/client-logo-6.svg"

function Index() {
  return (
    <>
      <div className="video-bg">
        <video muted autoPlay loop>
          <source src={videoBg} />
        </video>
      </div>

      <div className="container">
        <div className="hero position-absolute">
            <div className="hero-content text-center">
                <div className="section-title">
                  <h5>
                    <img src={titleShape} alt="title Shape" className='img-fluid me-2' />
                    Welcome to Me Freelance Solutions
                  </h5>
                  <h1>Hire Top professionals to <br /> Transform your 
                  <span> Ideas info reality</span> </h1>
                </div>
                <div className="hero-image mt-5">
                  <img src={hero} alt="hero" className='img-fluid' />
                  <div className="floting-img">
                    <div className="floting-img-1">
                      <img src={heroIcon1} className='img-fluid' alt="" />
                    </div>
                    <div className="floting-img-2">
                      <img src={heroIcon2} className='img-fluid' alt="" />
                    </div>
                  </div>
                  <div className="floting-text">
                      <span>Web Developer</span>
                      <span>Graphic Design</span>
                  </div>
                </div>
            </div>
        </div>
      </div>

      {/* MARQUE LOGO */}

      <div className="hero-marquee position-absolute">
          <marquee behavior="alternate" direction="">
            <img src={logo1} alt="logo1" className='img-fluid ms-5' />
            <img src={logo2} alt="logo1" className='img-fluid ms-5' />
            <img src={logo3} alt="logo1" className='img-fluid ms-5' />
            <img src={logo4} alt="logo1" className='img-fluid ms-5' />
            <img src={logo5} alt="logo1" className='img-fluid ms-5' />
            <img src={logo6} alt="logo1" className='img-fluid ms-5' />
          </marquee>
      </div>
    </>
  )
}

export default Index