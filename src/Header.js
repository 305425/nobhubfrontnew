
import './App.css';
import './assets/css/main.css'
import './header.css'
import axios from "axios"

import { useEffect, useState } from 'react';
import API from './config';
import HeaderTop from './headertop.js/headertop';
import { Nav, NavDropdown } from 'react-bootstrap';

function Header() {
const [navData, setNavData] = useState([])
  useEffect(() => {

    getNavData();

  }, []);


  const getNavData = () => {
    axios.get(`${API}/nav-bars`)
      .then((response) => {
        console.log("response", response.data[0])
        setNavData(response.data[0])
      }).catch((error) => {
        console.log("error", error)
      })

  }
  
  return (
<header className="header">
  {/* <HeaderTop className="mobile_hide"/> */}
<div className="header__cols">
  <div className="header__left">
    <div className="header__inner-cols">
      <div className="header__inner-col header__inner-col_mob">
        <button className="mob-button js-mob-open">
          <span className="mob-button__icon" />
        </button>
      </div>
      <div className="header__inner-col">
        <a className="header-logo" href="/">
          {navData&& navData.Logo &&
         <img className="header-logo__image" src={API+navData.Logo.url} alt="" />
          }
         
        </a>
      </div>
    </div>
  </div>
  <div className="header__center js-from-1">
    <div className="header-mob js-content-1">
      <ul className="main-nav">
        <li className="main-nav__item">
          <a className="main-nav__link js-scrolltoid" href="#features">Features</a>
        </li>
        {/* <li className="main-nav__item">
          <a className="main-nav__link js-scrolltoid" href="#download">Download app</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link js-scrolltoid" href="#ui">UI screens</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link js-scrolltoid" href="#testimonials">Testimonials</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link js-scrolltoid" href="#faq">FAQ</a>
        </li> */}
        <Nav className="me-auto">
      <Nav.Link href="#features" style={{color:"white"}}>Request a Demo</Nav.Link>
      <NavDropdown title="Resources" id="collasible-nav-dropdown" style={{color:"white"}}>
        <NavDropdown.Item href="#action/3.1" style={{color:"black"}}>Video tutorials</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" style={{color:"black"}}>Live Training</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" style={{color:"black"}}>Webinars and Events</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" style={{color:"black"}}>NobHub Blog</NavDropdown.Item>
        <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
       
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" style={{color:"black"}}>Privacy and Security</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing" style={{color:"white"}}>Support</Nav.Link> 
      <NavDropdown title="Languages" id="collasible-nav-dropdown" style={{color:"white"}}>
      <NavDropdown.Item href="#action/3.1" style={{color:"black"}}>Hindi</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.1" style={{color:"black"}}>English</NavDropdown.Item>

      </NavDropdown>
    </Nav>
        {/* <li className="main-nav__item">
          <a className="main-nav__link " href="/login">LOGIN</a>
      </li> */}
        <li className="main-nav__item">
          <a className="main-nav__button " href="/login">LOGIN</a>
        </li>
        {/* <li className="main-nav__item">
          <select name="cars" id="cars">
       
            <option >Choose </option>
            <option >English</option>
            <option >Hindi</option>
            <option >Telugu</option>
          </select>
        </li> */}
      </ul>
    </div>
  </div>
  <div className="header__right js-from-2">
    <div className="header-mob js-content-2">
      <a className="header-tel" href="tel:+17426584122">+1 742 65 84 122</a>
    </div>
  </div>
</div>
</header>
  )
    }
  export default Header;