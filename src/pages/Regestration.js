import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../assests/css/newStyle.css";
import "../assests/css/bootstrap.min.css";
import "../assests/css/style.css";

const Regestration =()=>{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example")); // you can watch individual input by pass the name of the input
    
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
                    <h1 className="display-3 text-white animated slideInDown">Registration</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Register</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
      
        <section className="reg-sec" >
        <div className="main-regester">
            <form onSubmit={handleSubmit(onSubmit)}>
             <input placeholder="First Name" required
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
             />
                  {errors?.firstName?.type === "required" && <p className="req">This field is required</p>}
                  {errors?.firstName?.type === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                    )}
                  {errors?.firstName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                    )}
                    <br></br>
             <input placeholder="Last Name" required {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                  {errors?.lastName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                    )}
                    <br></br>
            <input placeholder="Age" required {...register("age", { min: 18, max: 99 })} />
                  {errors.age && (
                    <p className="req">You Must be older then 18 and younger then 99 years old</p>
                  )}
                  <input type="submit" />
                  
                  </form>
         </div>
      </section>
      </div>
    );
};

export default Regestration ;