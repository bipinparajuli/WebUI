import React from 'react'
import {Navbar,Nav,Button,Container} from 'react-bootstrap'

import {NavLink} from 'react-router-dom'
import "./Navigation.css"
const Navigationbar = () => {
    return (
        <Container>
            <Navbar  collapseOnSelect expand="lg" bg="light" variant="dark">
  <Navbar.Brand style={{color:"black",fontFamily: "Poppins, sans-serif",fontWeight:"bold"}} href="#home">Travel</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="navlink_container">
      <NavLink  className="navlink" to="/">Stories</NavLink>
      <NavLink className="navlink" to="/">Destinations</NavLink>
      <NavLink className="navlink" to="/">Adventures</NavLink>
      <NavLink className="navlink" to="/">Experts</NavLink>
                <Button className="btn_getstarted">Join us</Button>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Container>
    )
}

export default Navigationbar
