import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand >Tiles Warehouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
            {
              user ?
              <>
              <Nav.Link as={Link} to='/myItem'>My Items</Nav.Link>
              <Nav.Link as={Link} to='/addItem'>Add Item</Nav.Link>
              <Nav.Link as={Link} to='/manage'>Manange Inventory</Nav.Link>
              <Nav.Link onClick={()=>signOut(auth)}>Logout</Nav.Link>
              </>
              :
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;