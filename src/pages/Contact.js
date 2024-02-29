import React from "react";
import "../assests/css/bootstrap.min.css";
import "../assests/css/style.css";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Contact =()=>{
    return(
        <div>

<div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 Street, Cairo, Egypt</small>
                <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                <small className="text-light"><i className="fa fa-envelope-open me-2"></i>TravelO@gmail.com</small>
            </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
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
                    <h1 className="display-3 text-white animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container-xxl py-5">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
            <h1 className="mb-5">Contact For Any Questions</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <h5>Get In Touch With Us</h5>
                <div className="d-flex align-items-center mb-4">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: '50px; height: 50px'}}>
                        <i className="fa fa-map-marker-alt text-white"></i>
                    </div>
                    <div className="ms-3">
                        <h5 className="text-primary">Office</h5>
                        <p className="mb-0">221B Street, Cairo, Egypt</p>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: '50px; height: 50px'}}>
                        <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <div className="ms-3">
                        <h5 className="text-primary">Mobile</h5>
                        <p className="mb-0">+012 345 67890</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: '50px; height: 50px'}}>
                        <i className="fa fa-envelope-open text-white"></i>
                    </div>
                    <div className="ms-3">
                        <h5 className="text-primary">Email</h5>
                        <p className="mb-0">TravillO@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <iframe className="position-relative rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101150.24493226876!2d31.102566672265514!3d30.059545102602804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e1!3m2!1sen!2sbd!4v1708097565678!5m2!1sen!2sbd"
                    frameborder="0" style={{minHeight: '300px; border:0;'}} allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
            </div>
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                <form>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                <label for="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="email" placeholder="Your Email"></input>
                                <label for="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="subject" placeholder="Subject"></input>
                                <label for="subject">Subject</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '100px'}}></textarea>
                                <label for="message">Message</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>


        </div>
    );
}
export default Contact ;