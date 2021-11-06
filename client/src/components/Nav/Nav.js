import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Auth from '../../utils/auth';
// import Cart from '../Cart';



const NavigationBar = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">Felicity</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Accessories">Accessories</NavDropdown.Item>
            <NavDropdown.Item href="/Apparel">Apparel</NavDropdown.Item>
            <NavDropdown.Item href="/Bags">Bags</NavDropdown.Item>
            <NavDropdown.Item href="/Beauty">Beauty</NavDropdown.Item>
            <NavDropdown.Item href="/HomeDecor">Home Decor</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ShopAll">Shop All</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          {Auth.loggedIn() ? (
            <>
              <Nav.Link href="/profile">My Account</Nav.Link>
              <Nav.Link href="/" onClick={logout}>
                Logout
            </Nav.Link>
            </>
          ) : (
              <>
                <Nav.Link href="/LogIn">Log In</Nav.Link>
                <Nav.Link href="/CreateAccount">Create an Account</Nav.Link>

              </>
            )}
            <Nav.Link href= "Cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;
