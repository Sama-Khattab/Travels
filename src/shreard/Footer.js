import React from "react";
import "../assests/css/bootstrap.min.css";
import "../assests/css/style.css";
import "../assests/lib/animate/animate.css";
import "../assests/lib/animate/animate.min.css";
import "../index.css";
import img5 from "../assests/img/package-1.jpg";
import img6 from "../assests/img/package-2.jpg";
import img7 from "../assests/img/package-3.jpg";
import { Link } from "react-router-dom";

const Footer=()=>{
    return (
        <div>
           <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Company</h4>
                    <Link to={"/About"} className="btn btn-link">About Us</Link>
                     <Link to={"/Contact"}  className="btn btn-link" href="">Contact Us</Link>
                    <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">FAQs & Help</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Cairo, Egypt</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 6789</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>TravelO@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={img5} alt=""></img>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={img6} alt=""></img>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={img7} alt=""></img>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={img6} alt=""></img>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={img7} alt=""></img>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={img5} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div id="positionStyle" className="position-relative mx-auto">
                        <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"></input>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Travelo</a>
                    </div>
                    <div classNameName="col-md-6 text-center text-md-end">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Footer ;