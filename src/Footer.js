
import './App.css';
import './assets/css/main.css'

import subscription from './assets/img/svg/subscription.svg';
import { Link } from 'react-router-dom';
import API from './config';

function Footer() {


  return (


    <footer className="footer">
      {/* BEGIN SUBSCRIPTION */}
      <div className="subscription wrapper">
        <div className="subscription__bg">
          <div className="subscription__max">
            <span className="above-title">newsletter</span>
            <span className="subscription__title">Be aware of new features</span>
            <span className="subscription__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum
              tempor duis do ullamco eiusmod officia magna ad id.</span>
            <form>
              <div className="subscribe">
                <div className="subscribe__left">
                  <input className="subscribe__input text-input" type="text" placeholder="Email" />
                </div>
                <div className="subscribe__right">
                  <button className="subscribe__button button">
                    <span className="button__text">Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <img className="subscription__envelope" src={subscription} data-lazy={subscription} alt="" />
        </div>
      </div>
      {/* SUBSCRIPTION END */}
      <div className="footer-top wrapper">
        <a className="footer-logo" href="#">NOBHUB</a>
        <div className="footer-nav">
          <ul className="main-nav main-nav_center">
            <li className="main-nav__item">
              <Link to="/team">
                <h1 className="main-nav__link" >Address</h1>
              </Link>
              {/* <Link className="main-nav__link" to="/team">
                <a  >Our Team</a>
              </Link> */}
              <p style={{color:"white"}}>Test Address,<br/> +47 45 80 80 80</p>
         

            </li>
            <li className="main-nav__item">
     
                <h1 className="main-nav__link" >About</h1>
                <Link className="main-nav__link" to="/team">
                <a  >Our Team</a>
              </Link>
                <Link className="main-nav__link" to="/team">
                <a  >Distributors</a>
              </Link>
                <Link className="main-nav__link" to="/team">
                <a  >How to videos</a>
              </Link>
            </li>
            <li className="main-nav__item">
              <h1 className="main-nav__link js-scrolltoid">Sales</h1>
              <Link className="main-nav__link" to="/team">
                <a  >1.800.3754.9268</a>
              </Link>
              <Link className="main-nav__link" to="/team">
                <a  >Schedule time to Talk</a>
              </Link>
              <Link className="main-nav__link" to="/team">
                <a  >Plans & Pricing</a>
              </Link>
              <Link className="main-nav__link" to="/team">
                <a  >Privacy and Security</a>
              </Link>
            </li>
            <li className="main-nav__item">
              <h1 className="main-nav__link js-scrolltoid" >Support</h1>
              <a className="main-nav__link js-scrolltoid" href="#download">Account</a>
              <a className="main-nav__link js-scrolltoid" href="#download">Contact Us</a>
              <a className="main-nav__link js-scrolltoid" href="#download">Support Center</a>
              <a className="main-nav__link js-scrolltoid" href="#download">Live Training</a>
              <a className="main-nav__link js-scrolltoid" href="#download">Feedback</a>
            </li>
            {/* <li className="main-nav__item">
              <a className="main-nav__link js-scrolltoid" href="#ui">UI screens</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link js-scrolltoid" href="#testimonials">Testimonials</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link js-scrolltoid" href="#faq">FAQ</a>
            </li> */}
            {/* <li className="main-nav__item">
              <a className="main-nav__button js-scrolltoid" href="/login">LOGIN</a>
            </li> */}
            {/* <li className="main-nav__item">
              <a className="main-nav__button js-scrolltoid" href="#trial">Free trial</a>
            </li> */}

          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__main wrapper">
          <span className="copyrights">© All rights reserved. NOBHUB 2021</span>
        </div>
      </div>
      <div className="footer__bg" data-bg="assets/img/footer-bg.png" />
    </footer>
  )
}
export default Footer;