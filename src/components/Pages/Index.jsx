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

import service1 from "./../../assets/img/service-image-1.jpg"
import service2 from "./../../assets/img/service-image-2.jpg"
import service3 from "./../../assets/img/service-image-3.jpg"

import serviceIcon1 from "./../../assets/img/icon-service-item-1.svg"
import serviceIcon2 from "./../../assets/img/icon-service-item-2.svg"
import serviceIcon3 from "./../../assets/img/icon-service-item-3.svg"


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

      <div className="large-section position-relative pt-5 about-us">
        <div className="container about-wrapper my-5 py-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex gap-3">
                <img src={about1} className='img-fluid rounded' alt="" />
                <div className="d-flex flex-column gap-4 about-sec-image">
                  <img src={aboutCircle} className='img-fluid about-small-img1' alt="" />
                  <img src={about2} className='img-fluid rounded about-small-img2' alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h5>
                    <img src={titleShape} className='img-fluid me-2' alt="" />
                    welcome to our freelance solutions
                  </h5>
                  <h2>Driving <span>growth</span> though smarter SEO</h2>
                </div>
                <div className="d-flex about-info-text justify-content-between align-items-center py-5" style={{ borderBottom: "1px solid #3d3f3c" }}>
                  <h6>
                    <img src={titleShape} className='img-fluid me-3' alt="" />
                    Client-Centric Approach
                  </h6>
                  <h6>
                    <img src={titleShape} className='img-fluid me-3' alt="" />
                    Seamless Communication
                  </h6>
                </div>
                <div className="d-flex about-info-text justify-content-between align-items-center py-5" style={{ borderBottom: "1px solid #3d3f3c" }}>
                  <div className="d-flex">
                    <img src={aboutIcon1} className='img-fluid' alt="" />
                    <h4>Deticated to Client Success</h4>
                  </div>
                  <div className="d-flex">
                    <img src={aboutIcon2} className='img-fluid' alt="" />
                    <h4>Affirdable Service With Quality</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-5">
                  <div className="about-client d-flex gap-3">
                    <div className="about-client-img">
                      <img src={aboutClient} className='img-fluid rounded-circle' alt="" />
                    </div>
                    <div className="about-client-info">
                      <h5 className='fw-bold'>sarah mitchell</h5>
                      <h5 className='m-0'>marketing director</h5>
                    </div>
                  </div>
                  <div className="btn-1">
                    <button className="btn">More About</button>
                    <img src={btnArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service section my-5 py-5">
        <div className="container my-5 py-5">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="ser-card h-100">
                  <div className="section-image">
                      <img src={service1} className='card-img-top' alt="" />
                  </div>
                  <div className="ser-card-body">
                      <div className="ser-icon mb-3">
                          <img src="" alt="" />
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index