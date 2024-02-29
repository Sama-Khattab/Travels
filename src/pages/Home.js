import React from "react";
import "../assests/css/bootstrap.min.css";
import "../assests/css/style.css";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import img1 from "../assests/img/about.jpg";
import img2 from "../assests/img/destination-1.jpg";
import img3 from "../assests/img/destination-2.jpg";
import img4 from "../assests/img/destination-3.jpg";
import img5 from "../assests/img/package-1.jpg";
import img6 from "../assests/img/package-2.jpg";
import img7 from "../assests/img/package-3.jpg";
import team1 from "../assests/img/team-1.jpg";
import team2 from "../assests/img/team-2.jpg";
import team3 from "../assests/img/anonymous.png";
import team4 from "../assests/img/team-4.jpg";
import team5 from "../assests/img/team-5.jpg";
import team6 from "../assests/img/team-6.jpg";
import img12 from "../assests/img/testimonial-1.jpg"
import img13 from "../assests/img/testimonial-2.jpg"
import img14 from "../assests/img/testimonial-3.jpg"
import img15 from "../assests/img/testimonial-4.jpg"

const Home =()=>{
    return(
        <div>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
       <div className="row gx-0">
           <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
               <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                   <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 Street, Cairo, Egypt</small>
                   <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                   <small className="text-light"><i className="fa fa-envelope-open me-2"></i>TravelO@example.com</small>
               </div>
           </div>
           <div className="col-lg-4 text-center text-lg-end">
               <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                   <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                   <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                   <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                   <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                   <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
               </div>
           </div>
       </div>
      </div>
      
      
      
      <div className="container-fluid position-relative p-0">
       <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
           <a href="" className="navbar-brand p-0">
               <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>TravelO</h1>
       
           </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
               <span className="fa fa-bars"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarCollapse">
               <div className="navbar-nav ms-auto py-0">
                   <Link to={"/"} className="nav-item nav-link active">Home</Link>
                   <Link to={"/About"} className="nav-item nav-link">About</Link>
                   <Link to={"/Services"} className="nav-item nav-link">Services</Link>
                   <Link to={"/Packages"} className="nav-item nav-link">Packages</Link>
                   <div className="nav-item dropdown">
                       <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                       <div className="dropdown-menu m-0">
                           <Link to={"/Destinations"} className="dropdown-item">Destination</Link>
                           <Link to={"/Booking"} className="dropdown-item">Booking</Link>
                           <Link to={"/travel-guids"} className="dropdown-item">Our team</Link>
                           <Link to={"/Testimonial"} className="dropdown-item">Testimonial</Link>
                       </div>
                   </div>
                   <Link to={"/Contact"} className="nav-item nav-link">Contact</Link>
                   <Link to={"/Log-in"} className="nav-item nav-link">LogIn</Link>
               </div>
               <Link to={"/Regestration"} className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
           </div>
       </nav>
      
       <div className="container-fluid bg-primary py-5 mb-5 hero-header">
           <div className="container py-5">
               <div className="row justify-content-center py-5">
                   <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                       <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                       <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                       <div className="position-relative w-75 mx-auto animated slideInDown">
                           <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand"></input>
                           <button id="buttonStyle" type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2">Search</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
      </div>
      
      
       
               <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div id="home-style-1" className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative h-100">
                        <img id="img-style-1" className="img-fluid position-absolute w-100 h-100" src={img1} alt=""></img>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First className Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
   



    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
             
               
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-user text-primary mb-4"></i>
                            <h5>Travel Guides</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5>Event Management</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-user text-primary mb-4"></i>
                            <h5>Travel Guides</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5>Event Management</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


  
    <div className="container-xxl py-5 destination">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                <h1 className="mb-5">Popular Destination</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={img2} alt=""></img>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Giza Pyramids</div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={img3} alt=""></img>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Abu Simbel Temples</div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={img3} alt=""></img>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Karnak Temple</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="home-style-2" className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" >
                    <a className="position-relative d-block h-100 overflow-hidden" href="">
                        <img id="img-style-2" className="img-fluid position-absolute w-100 h-100" src={img4} alt="" ></img>
                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div>
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Cairo Tower</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
   


  
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                <h1 className="mb-5">Awesome Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={img5} alt=""></img>
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Thailand</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                            <div className="d-flex justify-content-center mb-2">   
                                <Link to={"*"} id="link-style-1" className="btn btn-sm btn-primary px-3 border-end">Read More</Link>
                                <Link to={"/Booking"}  id="link-style-2"  className="btn btn-sm btn-primary px-3" >Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={img6} alt=""></img>
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Indonesia</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">$139.00</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                            <div className="d-flex justify-content-center mb-2">
                                
                               <Link to={"*"} id="link-style-1" className="btn btn-sm btn-primary px-3 border-end">Read More</Link>
                                <Link to={"/Booking"}  id="link-style-2"  className="btn btn-sm btn-primary px-3" >Book Now</Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={img7} alt=""></img>
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Malaysia</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">$189.00</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                            <div className="d-flex justify-content-center mb-2">
                                <Link to={"*"} id="link-style-3" className="btn btn-sm btn-primary px-3 border-end">Read More</Link>
                                <Link to={"/Booking"}  id="link-style-2"  className="btn btn-sm btn-primary px-3" >Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  


    
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="booking p-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6 text-white">
                        <h6 className="text-white text-uppercase">Booking</h6>
                        <h1 className="text-white mb-4">Online Booking</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <Link to={"*"} className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</Link>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-white mb-4">Book A Tour</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name"></input>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email"></input>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label for="datetime">Date & Time</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-transparent" id="select1">
                                              <option value="1">Giza Pyramids</option>
                                              <option value="2">Abu Simbel Temples</option>
                                              <option value="3">Karnak Temple</option>
                                              <option value="4">Cairo Tower</option>
                                        </select>
                                        <label for="select1">Destination</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                        <label for="message">Special Request</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
                <h1 className="mb-5">3 Easy Steps</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: "100px", height: "100px"}}>
                            <i className="fa fa-globe fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Choose A Destination</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"></hr>
                        <hr className="w-50 mx-auto bg-primary mt-0"></hr>
                        <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: "100px", height: "100px"}}>
                            <i className="fa fa-dollar-sign fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Pay Online</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"></hr>
                        <hr className="w-50 mx-auto bg-primary mt-0"></hr>
                        <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: "100px", height: "100px"}}>
                            <i className="fa fa-plane fa-3x text-white"></i>
                        </div>
                        <h5 className="mt-4">Fly Today</h5>
                        <hr className="w-25 mx-auto bg-primary mb-1"></hr>
                        <hr className="w-50 mx-auto bg-primary mt-0"></hr>
                        <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   


    
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">TravelO Team</h6>
                <h1 class="mb-5">Meet Our Team</h1>
            </div>
 <div class="row g-4">
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team1} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Abdalaziz Hasan</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Front end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team2} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Mario Emad</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Front end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team3} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Sama Ahmed</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Front end</small>

             </div>
         </div>
     </div>
    
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team4} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Yahia Mohamed</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Back end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team5} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Shams Ahmed</h5>
                 <small>Information System</small>
                 <br/>
                 <small>Back end</small>

             </div>
         </div>
     </div>
     <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
         <div class="team-item">
             <div class="overflow-hidden">
                 <img class="img-fluid" src={team6} alt=""/>
             </div>
             <div class="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                 <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
             </div>
             <div class="text-center p-4">
                 <h5 class="mb-0">Maria Ashraf </h5>
                 <small>Information System</small>
                 <br/>
                 <small>Back end</small>

                         </div>
                     </div>
                </div>    
            </div>
        </div>
    </div>
    


    
 
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    
   
        </div>
    )
}

export default Home ;