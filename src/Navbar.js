import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container, } from 'react-bootstrap'
import logo from './space-tourism-website-main/space-tourism-website-main/starter-code/assets/shared/logo.svg'
import './Navbar.css'


const Navigate = () => {
  return (
    <div className= 'red'>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="">
            <Container className='back'>
                <Link to = '/'>
                <img className='logo' src={logo} alt="" />
                </Link>
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='bar'>
                    <Link className='change'  to = '/'>00 HOME</Link>
                    <Link className='change' to = '/destination'>01 DESTINATION</Link>
                    <Link className='change' to = '/crew'>02 CREW</Link>
                    <Link className='change' to = '/technology'>03 TECHNOLOGY</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default Navigate