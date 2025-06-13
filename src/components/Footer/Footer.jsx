import footerIcon1 from "../../assets/img/icon-footer-contact-1.svg"
import footerIcon2 from "../../assets/img/icon-location.svg"

function Footer() {
    const date = new Date()
  return (
    <footer className="pt-5 pb-5 bg-black text-white">
       <div>
        <hr className="border-light" />
            <div className="container">
                <div className="row mt-5 text-center text-md-start">
                    <div className="col-xl-3 mb-4">
                        <h4 className="fw-bold mb-3">D.Lochinbek & <span style={{color: "#c6ff00"}}></span></h4>
                        <p className="mb-0"> Quality Work with <br />
                            No Limits Freelancing 
                        </p>
                        <p>Made Simple and Successfil.</p>
                    </div>

                    <div className="col-xl-3 mb-4">
                        <h5 className="fw-bold mb-3">Need Help?</h5>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <div className="text-black rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: "50px", height: "50px", background: "#c6ff00"}}>
                                <img src={footerIcon1} alt="footer-icon" />    
                             </div>

                             <div>
                                <p className="mb-1"> 🇺🇿 +998 99 280 75 76</p>
                                <p className="mb-0">ldehkonov9@gmail.com</p>
                             </div>
                        </div>
                    </div>

                    <div className="col-xl-3 mb-4">
                    
                         <h5 className="fw-bold mb-3">Our Address</h5>
                         <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                        <div className="text-black rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: "50px", height: "50px", background: "#c6ff00"}}>
                                <img src={footerIcon2} alt="footer-icon" />    
                             </div>

                             <div>
                               <p className="mb-0">
                                   187 Amir Temur Street <br />
                                   Tashkent city <br />
                                   Uzbekistan
                               </p>
                             </div>
                             </div>
                    </div>
                    <div className="col-xl-3 mb-4">
                    <h5>Subscribe Newsletter</h5>
                    <form className="form-group footer-group gap-2">
                        <input type="email" name="email" className="form-control" id="mail" placeholder="Enter Your Email" />
                        <button type="submit" className="newsletter-btn">
                            <i className="fa-regular fa-paper-plane fs-4"></i>
                        </button>
                    </form>
                </div>
                </div>
            </div>
       </div>
       <hr className="border-light" />
       <div className="row align-items-center py-2 text-center text-md-center justify-content-between">
            <div className="col-lg-6 mb-3 mb-lg-0" style={{paddingRight: "100px"}}>
                <a href="#" className="me-4 text-white">Home</a>
                <a href="#" className="me-4 text-white">About Us</a>
                <a href="#" className="me-4 text-white">Services</a>
                <a href="#" className="me-4 text-white">Blogs</a>
                <a href="#" className="me-4 text-white">Projects</a>
                <a href="#" className="me-4 text-white">Contact</a>
            </div>

            <div className="col-lg-6 text-lg-end">
                <span className="me-2 fs-5">Follow us on:</span>
                <a href="#" 
                className="text-white me-2 d-inline-block text-center footer-icon">
                   <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <a href="#" 
                className="text-white me-2 d-inline-block text-center footer-icon">
                    <i className="ri-twitter-x-line fs-5"></i>
                </a>

                <a href="#" 
                className="text-white me-2 d-inline-block text-center footer-icon">
                    <i className="ri-facebook-fill fs-5"></i>
                </a>

                <a href="#" 
                className="text-white me-2 d-inline-block text-center footer-icon">
                    <i className="ri-instagram-fill fs-5"></i>
                </a>
            </div>
       </div>
       <hr className="border-light" />
       <div className="text-center mt-4">
            <div className="d-inline-block px-4 py-3 fw-semibold text-black rounded-pill" style={{backgroundColor: "#BFF747 "}}>
                Copyright © {date.getFullYear()} All Rights Reserved. 
            </div>
       </div>
    </footer>
  )
}

export default Footer