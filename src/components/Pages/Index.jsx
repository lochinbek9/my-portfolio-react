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
import whatIcon1 from "./../../assets/img/icon-what-we-1.svg"
import whatIcon2 from "./../../assets/img/icon-what-we-2.svg"
import whatIcon3 from "./../../assets/img/icon-what-we-3.svg"
import whatIcon4 from "./../../assets/img/icon-what-we-4.svg"
import expertiseIcon01 from "./../../assets/img/icon-expertise-1.svg"
import expertiseIcon02 from "./../../assets/img/icon-expertise-2.svg"
import expertise from "./../../assets/img/expertise-image.png"

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
      {/* SERVICES */}
      <div className="service section py-5">
        <div className="container my-5 py-5">
          <div className="row section-head py-5">
            <div className="col-lg-6">
              <div className="section-title">
                <h5><img src={titleShape} className='img-fluid me-2' alt="" />Services</h5>
                <h2>Our Popular <span>Services</span> </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <p>Explore our range of in-demand services designed to deliver exceptional results and meet your unique.</p>
              <div className="btn-1">
                <button className='btn'>See All Services</button>
                <img src={btnArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Card 1  */}
            <div className="col-lg-4">
              <div className="ser-card h-100">
                <div className="section-image">
                  <img src={service1} className='card-img-top' alt="" />
                </div>
                <div className="ser-card-body">
                  <div className="ser-icon mb-3">
                    <img src={serviceIcon1} alt="" />
                  </div>
                  <h5 className='ser-card-title'>E-Commerce Managment</h5>
                  <p className='ser-card-text'>Streamling your online store, optimizing and product listings.</p>
                </div>
                <div className="read-more d-flex align-items-center justify-content-center">
                  <button type='button'>Read More
                    <i className='ri-arrow-right-up-line'></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 1 END */}

            {/* Card 2  */}
            <div className="col-lg-4">
              <div className="ser-card h-100">
                <div className="section-image">
                  <img src={service2} className='card-img-top' alt="" />
                </div>
                <div className="ser-card-body">
                  <div className="ser-icon mb-3">
                    <img src={serviceIcon2} alt="" />
                  </div>
                  <h5 className='ser-card-title'>Telegram bot</h5>
                  <p className='ser-card-text'>Streamling your online store, optimizing and product listings.</p>
                </div>
                <div className="read-more d-flex align-items-center justify-content-center">
                  <button type='button'>Read More
                    <i className='ri-arrow-right-up-line'></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-4">
              <div className="ser-card h-100">
                <div className="section-image">
                  <img src={service3} className='card-img-top' alt="" />
                </div>
                <div className="ser-card-body">
                  <div className="ser-icon mb-3">
                    <img src={serviceIcon3} alt="" />
                  </div>
                  <h5 className='ser-card-title'>Web development</h5>
                  <p className='ser-card-text'>Streamling your online store, optimizing and product listings.</p>
                </div>
                <div className="read-more d-flex align-items-center justify-content-center">
                  <button type='button'>Read More
                    <i className='ri-arrow-right-up-line'></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 end */}
          </div>



        </div>
      </div>
      {/* What We Do */}

      <div className="container what-we-do">
        <div className="row section-head py-5">
          <div className="col-lg-6">
            <div className="section-title">
              <h5><img src={titleShape} className='img-fluid me-2' alt="" />WHAT WE DO</h5>
              <h2>Empowering success <span>freelance</span> solutions</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <p>Explore our range of in-demand services designed to deliver exceptional results and meet your unique.</p>

          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 service-wrap">
            <div className="service-card">
              <div className="service-icon mb-4">
                <img src={whatIcon1} alt="" />
              </div>
              <h5>Content Creation </h5>
              <p>Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaiging</p>
            </div>
          </div>
          <div className="col-lg-6 service-wrap">
            <div className="service-card">
              <div className="service-icon mb-4">
                <img src={whatIcon2} alt="" />
              </div>
              <h5>Content Creation </h5>
              <p>Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaiging</p>
            </div>
          </div>
          <div className="col-lg-6 service-wrap">
            <div className="service-card">
              <div className="service-icon mb-4">
                <img src={whatIcon3} alt="" />
              </div>
              <h5>Content Creation </h5>
              <p>Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaiging</p>
            </div>
          </div>
          <div className="col-lg-6 service-wrap">
            <div className="service-card">
              <div className="service-icon mb-4">
                <img src={whatIcon4} alt="" />
              </div>
              <h5>Content Creation </h5>
              <p>Crafting compelling, SEO-friendly content that resonates with audience From blogs to website copy, we deliver engaiging</p>
            </div>
          </div>
        </div>
      </div>


      <div className='py-5 bg-black text-white position-relative'>
        <div className='container'>
          <div className='position-relative overflow-hidden rounded-5 banner-container d-flex'>
            <div className='position-relative'>
              <div className='section-title banner-title p-5 mb-5'>
                <h3 className='fw-bold mb-2 text-uppercase'>Videos</h3>
                <h2 className='display-4 fw-normal'>Showing Success through Dynamic <span className='fw-bold'>Videos</span></h2>
              </div>

              <div className='play-btn'>
                <i className='bi bi-play-fill'></i>
              </div>

              <div className='position-absolute bottom-0 start-0 end-0 py-4 text-white fw-medium d-flex flex-wrap justify-content-center gap-4 border-top border-white border-opacity-25'>
                <div>
                  <i className='bi bi-check-circle-fill mb-2' style={{color: "#bff747"}}></i>
                  Client Success Stories Action
                </div>
                <div>
                  <i className='bi bi-check-circle-fill mb-2' style={{color: "#bff747"}}></i>
                 Transforming Idea Into Visual 
                </div>
                <div>
                  <i className='bi bi-check-circle-fill mb-2' style={{color: "#bff747"}}></i>
                 Creative Freelance Servicess
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='large-section'>
        <div className='container my-5 py-5 expertise-section'>
          <div className='row align-items-center g-5'>
            <div className='col-lg-6'>
              <div className='section-title'>
                <h5>
                  <img src={titleShape} alt="" className='img-fluid me-2' />
                  Our Experties
                </h5>
                <h2>Maximizing Value Trough Freelance <span>Experties</span></h2>
              </div>

              <div className="row mt-4 g-3">
                  <div className="col-md-6">
                    <div className="expertise-box">
                      <div className="expertise-icon mb-4">
                        <img src={expertiseIcon01} alt="" />
                      </div>
                      <h5 className='fw-bold mb-3'>Quality Assurance</h5>
                      <p>Freelances are commited and delivering top Quality work. </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="expertise-box">
                      <div className="expertise-icon mb-4">
                        <img src={expertiseIcon02} alt="" />
                      </div>
                      <h5 className='fw-bold mb-3'>Scalable Workfource</h5>
                      <p>Freelances are commited and delivering top Quality work. </p>
                    </div>
                  </div>

                  <div className="btn-1">
                    <button>See All Services</button>
                    <img src={btnArrow}/>
                  </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-xl-0">
              <img src={expertise} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index