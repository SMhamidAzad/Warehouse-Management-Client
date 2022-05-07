import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar className='nav-style' collapseOnSelect expand="lg" >
        <Container>
        <Navbar.Brand className='text-white fw-bold fs-2'>
        ₱rime door pro.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className='text-white anchor' as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className='text-white anchor' as={Link} to='/blogs'>Blogs</Nav.Link>
            {
              user ?
              <>
              <Nav.Link className='text-white anchor' as={Link} to='/myItem'>My Items</Nav.Link>
              <Nav.Link className='text-white anchor' as={Link} to='/addItem'>Add Item</Nav.Link>
              <Nav.Link className='text-white anchor' as={Link} to='/manage'>Manange Inventory</Nav.Link>
              <Nav.Link className='text-black primary-btn px-4' onClick={()=>signOut(auth)}>Logout</Nav.Link>
              </>
              :
            <Nav.Link className='text-black primary-btn px-4' as={Link} to='/login'>Login</Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;