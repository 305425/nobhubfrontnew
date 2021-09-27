import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar ,Container} from 'react-bootstrap';


import './headertop.css'
function HeaderTop(){
    return(
<Navbar className="mobile_hide" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <Nav className="me-auto">
      <Nav.Link href="#features">Request a Demo</Nav.Link>
      <NavDropdown title="Resources" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Video tutorials</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Live Training</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Webinars and Events</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">NobHub Blog</NavDropdown.Item>
        <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
       
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Privacy and Security</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Support</Nav.Link> 
    </Nav>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default HeaderTop;