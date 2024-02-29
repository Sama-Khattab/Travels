import React from "react";
import "../assests/css/bootstrap.min.css";
import "../assests/css/style.css";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import team1 from "../assests/img/team-1.jpg";
import team2 from "../assests/img/team-2.jpg";
import team3 from "../assests/img/anonymous.png";
import team4 from "../assests/img/team-4.jpg";
import team5 from "../assests/img/team-5.jpg";
import team6 from "../assests/img/team-6.jpg";
import { Link } from "react-router-dom";

const TravelGuide=()=>{
    return(
        
<div>
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style={{height: '45px'}}>
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>123 Street, Cairo, Egypt</small>
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>TravelO@example.com</small>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style={{height: '45px'}}>
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
                        <h1 class="display-3 text-white animated slideInDown">Guides</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Guides</li>
                            </ol>
                        </nav>
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
export default TravelGuide ;