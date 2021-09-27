import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import OtpInput from 'react-otp-input';
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

const Login = () => {
  const [otp,setOtp]= useState('')
  const handleOtpchange=(otp) => setOtp( otp )
    return (
    <>

      <div className="container-fluid page-container  fluidbg">
        <Header />
        {/* <div className="container">
        <div className="row">
          <div className="col-6 mx-auto stylecontainer">
            <div className="d-flex pt-4 bd-highlight ms-4 pb-4">
              <div>
      
             
              </div>
              <div className="paragraph-style">
                <p className="headingstyle">Sign in</p>
              </div>
            </div>
            <div className="formcontainer pt-1">

              <form className="input">
                <div className="d-flex justify-content-center inputfield mb-3">
                  <input
                    className="form-control w-10 elementstyle"
                    id="login"
                    type="text"
                    name="login"
                    placeholder="Enter your Number"
                  />
                </div>
                <div className="d-flex justify-content-center inputfield mb-4">
                  <input
                    className="form-control w-10 elementstyle"
                    id="pw"
                    type="password"
                    name="OTP"
                    placeholder="Enter your OTP"
                  />
                </div>
                <div className="d-flex justify-content-center inputfield mb-4">
            
                  <button className="form-control w-10 elementstyle" type="submit">
                    Sign In With SSO
                  </button>
                </div>
             
                <div className="d-flex justify-content-center">
                  <button className="btn mb-4 buttonstyle" type="submit">
                    Login
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
           </div> */}
        <section class="login-block main">
          <div class="container login-container">
            <div class="row">
              <div class="col-md-4 login-sec">
                <h2 class="text-center">Login Now</h2>
                <form class="login-form">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-uppercase">Number</label>
                    <input type="text" class="form-control" placeholder="" />

                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" class="text-uppercase">OTP</label>
                    <OtpInput
        value={otp}
        onChange={handleOtpchange}
        numInputs={6}
        separator={<span>-</span>}
      />
                  </div>


                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" />
                      <small>Remember Me</small>
                    </label>
                    <button type="submit" class="btn btn-login float-right">Submit</button>
                  </div>

                </form>
                <div class="copy-text">Created with <i class="fa fa-heart"></i> by Grafreez</div>
              </div>
              <div class="col-md-8 banner-sec">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <img class="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                      <div class="carousel-caption d-none d-md-block">
                        <div class="banner-text">
                          <h2>This is Heaven</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                      <div class="carousel-caption d-none d-md-block">
                        <div class="banner-text">
                          <h2>This is Heaven</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                      <div class="carousel-caption d-none d-md-block">
                        <div class="banner-text">
                          <h2>This is Heaven</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer />


      </div>

      {/* <footer class="text-center text-lg-start bg-light text-muted">

<section
  class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
>

  <div class="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
  </div>
  <div>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-google"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="" class="me-4 text-reset">
      <i class="fab fa-github"></i>
    </a>
  </div>
</section>
<section class="">
  <div class="container text-center text-md-start mt-5">
    <div class="row mt-3">

      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
          <i class="fas fa-gem me-3"></i>Company name
        </h6>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
   
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
 
        <h6 class="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <a href="#!" class="text-reset">Angular</a>
        </p>
        <p>
          <a href="#!" class="text-reset">React</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Vue</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Laravel</a>
        </p>
      </div>

      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 class="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="#!" class="text-reset">Pricing</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Settings</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Orders</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Help</a>
        </p>
      </div>
    
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <h6 class="text-uppercase fw-bold mb-4">
          Contact
        </h6>
        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
        <p>
          <i class="fas fa-envelope me-3"></i>
          info@example.com
        </p>
        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
      </div>

    </div>

  </div>
</section>

<div class="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
  © 2021 Copyright:
  <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>

</footer> */}


    </>
  );
};
export default Login;
