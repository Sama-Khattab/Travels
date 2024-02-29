import React from "react";
import "../assests/css/bootstrap.min.css";
import "../assests/css/style.css";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Book =()=>{
    return(
        <div>
    
    
    
      <div class="container-fluid bg-dark px-5 d-none d-lg-block">
          <div class="row gx-0">
              <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                  <div class="d-inline-flex align-items-center" style={{ height: '45px' }}>
                      <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>123 Street, Cairo, Egypt</small>
                      <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                      <small class="text-light"><i class="fa fa-envelope-open me-2"></i>TravelO@example.com</small>
                  </div>
              </div>
              <div class="col-lg-4 text-center text-lg-end">
                  <div class="d-inline-flex align-items-center" style={{ height: '45px' }}>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                  </div>
              </div>
          </div>
      </div>
    
    
      <div class="container-fluid position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
              <a href="" class="navbar-brand p-0">
                  <h1 class="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i>TravelO</h1>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="fa fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav ms-auto py-0">
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
    
          <div class="container-fluid bg-primary py-5 mb-5 hero-header">
              <div class="container py-5">
                  <div class="row justify-content-center py-5">
                      <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                          <h1 class="display-3 text-white animated slideInDown">Booking</h1>
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb justify-content-center">
                                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                                  <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                  <li class="breadcrumb-item text-white active" aria-current="page">Booking</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    
      <div class="container-xxl py-5">
          <div class="container">
              <div class="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                  <h6 class="section-title bg-white text-center text-primary px-3">Process</h6>
                  <h1 class="mb-5">3 Easy Steps</h1>
               </div>   
              <div class="row gy-5 gx-4 justify-content-center">
                  <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                      <div class="position-relative border border-primary pt-5 pb-4 px-4">
                          <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: '100px', height: '100px'}}>
                              <i class="fa fa-globe fa-3x text-white"></i>
                          </div>
                          <h5 class="mt-4">Choose A Destination</h5>
                          <hr class="w-25 mx-auto bg-primary mb-1"/>
                          <hr class="w-50 mx-auto bg-primary mt-0"/>
                          <p class="mb-0">A unique destination for an unforgettable vacation!
     Are you looking for a unique tourist destination that enriches your experience and refreshes your soul?
    
     Our destination offers you the perfect blend of history, culture and natural beauty, to suit all tastes and interests.</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                      <div class="position-relative border border-primary pt-5 pb-4 px-4">
                          <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: '100px', height: '100px'}}>
                              <i class="fa fa-dollar-sign fa-3x text-white"></i>
                          </div>
                          <h5 class="mt-4">Pay Online</h5>
                          <hr class="w-25 mx-auto bg-primary mb-1"/>
                          <hr class="w-50 mx-auto bg-primary mt-0"/>
                          <p class="mb-0">Skip the lines and simplify your travel planning! Secure your unforgettable journey with just a few clicks. Pay for your entire trip online – flights, accommodation, activities – all in one secure place. Save time and avoid hassle. Book now and pay online for a seamless travel experience!</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                      <div class="position-relative border border-primary pt-5 pb-4 px-4">
                          <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: '100px', height: '100px'}}>
                              <i class="fa fa-plane fa-3x text-white"></i>
                          </div>
                          <h5 class="mt-4">Fly Today</h5>
                          <hr class="w-25 mx-auto bg-primary mb-1"/>
                          <hr class="w-50 mx-auto bg-primary mt-0"/>
                          <p class="mb-0">Adventure awaits! Don't let another day's sunrise pass you by. Trade your routine for unforgettable experiences. Book your flight today and explore, Memories are made for the taking, so pack your bags and let your journey begin. adventures await you, and your dream vacation is just a click away!</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    
      <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container">
              <div class="booking p-5">
                  <div class="row g-5 align-items-center">
                      <div class="col-md-6 text-white">
                          <h6 class="text-white text-uppercase">Booking</h6>
                          <h1 class="text-white mb-4">Online Booking</h1>
                          <p class="mb-4">Step into a world of seamless exploration with our online booking platform. Your travel aspirations unfold effortlessly as you navigate through a digital realm where every click is a gateway to a new destination .</p>
                          <p class="mb-4"> each reservation becomes a ticket to a personalized odyssey. It's not just booking; it's orchestrating your voyage with the rhythm of innovation, turning every travel plan into a symphony of convenience and excitement, all at the tip of your fingers.</p>
                          <Link to={"*"} className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</Link>
                      </div>
                      <div class="col-md-6">
                          <h1 class="text-white mb-4">Book A Tour</h1>
                          <form>
                              <div class="row g-3">
                                  <div class="col-md-6">
                                      <div class="form-floating">
                                          <input type="text" class="form-control bg-transparent" id="name" placeholder="Your Name"/>
                                          <label for="name">Your Name</label>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-floating">
                                          <input type="email" class="form-control bg-transparent" id="email" placeholder="Your Email"/>
                                          <label for="email">Your Email</label>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-floating date" id="date3" data-target-input="nearest">
                                          <input type="text" class="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                          <label for="datetime">Date & Time</label>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-floating">
                                          <select class="form-select bg-transparent" id="select1">
                                              <option value="1">Giza Pyramids</option>
                                              <option value="2">Abu Simbel Temples</option>
                                              <option value="3">Karnak Temple</option>
                                              <option value="4">Cairo Tower</option>
    
                                          </select>
                                          <label for="select1">Destination</label>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="form-floating">
                                          <textarea class="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                                          <label for="message">Special Request</label>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <button class="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          
    
    
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    
    
    
    
        </div>
          );
}
export default Book ;