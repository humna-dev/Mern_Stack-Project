import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineShopping } from 'react-icons/ai';
export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link className='navbar-brand' to='/'><img src="https://cdn.shopify.com/s/files/1/0249/1218/files/Soko-Glam-logo-GSD-Blue_1.png?v=1613726693" width='200px' alt="" style={{ marginLeft: '-40px' }} /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/brands' className='nav-link ' >Brands</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                        <Link to='/category' className='nav-link'>Category</Link>
                        
                    </Nav>

                    <div className=" d-flex gap-3">
                    <Link to='/profile' className=" btn d-flex align-items-center gap-3"> 
    <IoPersonOutline size={24} color="black"/>
</Link>

<Link className="btn " to='/cart'><AiOutlineShopping size={24} /></Link>
                        <button className="btn"
                            onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })
                            }}
                        >Sign Out</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}