import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" className="bg-theme">
            <Container>

            <Link className='navbar-brand' to='/'> <img src="https://cdn.shopify.com/s/files/1/0249/1218/files/Soko-Glam-logo-GSD-Blue_1.png?v=1613726693" width='200px' alt="" /> </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">
  <Nav.Item className="m-1">
    <Link to='/login' className='btn '>
      Login
    </Link>
  </Nav.Item>
</Nav>
<Nav >
  <Nav.Item className="m1-auto">
    <Link to='/signup' className='btn'>
      SignUp
    </Link>
  </Nav.Item>
</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}