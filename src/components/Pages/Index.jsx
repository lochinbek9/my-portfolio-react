import React from 'react'

import videoBg from "./../../assets/img/bg-video.mp4"
import titleShape from "./../../assets/img/title-shape.svg"
import hero from "./../../assets/img/hero-image.png"
import heroIcon1 from "./../../assets/img/icon-hero-img-1.svg"
import heroIcon2 from "./../../assets/img/icon-hero-img-2.svg"

import logo1 from "./../../assets/img/client-logo-1.svg"
import logo2 from "./../../assets/img/client-logo-2.svg"
import logo3 from "./../../assets/img/client-logo-3.svg"
import logo4 from "./../../assets/img/client-logo-4.svg"
import logo5 from "./../../assets/img/client-logo-5.svg"
import logo6 from "./../../assets/img/client-logo-6.svg"

import about1 from "./../../assets/img/about-img-1.jpg"
import about2 from "./../../assets/img/about-img-2.jpg"
import aboutCircle from "./../../assets/img/about-more-circle.svg"
import aboutIcon1 from "./../../assets/img/icon-about-agency-1.svg"
import aboutIcon2 from "./../../assets/img/icon-about-agency-2.svg"
import aboutClient from "./../../assets/img/author-image.jpg"
import btnArrow from "./../../assets/img/btn-arrow.svg"

function Index() {
  return (
    <>
      <div className="video-bg">
        <video muted autoPlay loop>
          <source src={videoBg} />
        </video>
      </div> 

   <section className='hero'>
       <div className="container">
       
          <div className="hero-content text-center">
            <div className="section-title">
              <h5>
                <img src={titleShape} alt="title Shape" className='img-fluid me-2' />
                Welcome to Me Freelance Solutions
              </h5>
              <h1>Hire Top professionals to <br /> Transform your
                <span> Ideas info reality</span> </h1>
            </div>
          </div>
      
      </div>
   </section>

      {/* MARQUE LOGO */}

       <div className="hero-marquee">
        <marquee behavior="alternate" direction="">
          <img src={logo1} alt="logo1" className='img-fluid ms-5' />
          <img src={logo2} alt="logo1" className='img-fluid ms-5' />
          <img src={logo3} alt="logo1" className='img-fluid ms-5' />
          <img src={logo4} alt="logo1" className='img-fluid ms-5' />
          <img src={logo5} alt="logo1" className='img-fluid ms-5' />
          <img src={logo6} alt="logo1" className='img-fluid ms-5' />

          <img src={logo1} alt="logo1" className='img-fluid ms-5' />
          <img src={logo2} alt="logo1" className='img-fluid ms-5' />
          <img src={logo3} alt="logo1" className='img-fluid ms-5' />
          <img src={logo4} alt="logo1" className='img-fluid ms-5' />
          <img src={logo5} alt="logo1" className='img-fluid ms-5' />
          <img src={logo6} alt="logo1" className='img-fluid ms-5' />

          <img src={logo1} alt="logo1" className='img-fluid ms-5' />
          <img src={logo2} alt="logo1" className='img-fluid ms-5' />
          <img src={logo3} alt="logo1" className='img-fluid ms-5' />
          <img src={logo4} alt="logo1" className='img-fluid ms-5' />
          <img src={logo5} alt="logo1" className='img-fluid ms-5' />
          <img src={logo6} alt="logo1" className='img-fluid ms-5' />
        </marquee>
      </div> 

      {/* ABOUT-US */}

      <div className="large-section pt-5 about-us">
        <div className="container my-5 py-5">
          <div className="row">
              <div className="col-lg-6">
                <img src={about1} className='img-fluid rounded' alt="" />
                <div className="d-flex flex-column gap-4">
                  <img src={aboutCircle} className='img-fluid about-small-img1' alt="" />
                  <img src={about2} className='img-fluid rounded about-small-img2' alt="" />
                </div>
              </div>
              <div className="col-lg-6"></div>
          </div>
        </div>
      </div> 


    </>
  )
}

export default Index