import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

function NavScrollExample() {
  return (
    <Navbar expand='lg'>
      <Container fluid >
        <Navbar.Brand href="/"><img src='./logoGeeks.png' alt="logo" className='logo-nav'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            
            <NavDropdown title="Magic The Gathering" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sealed Product</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Singles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Sell Us Your Cards
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pokemon" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sealed Product</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Singles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Sell Us Your Cards
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Yu-Gi-Oh" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sealed Product</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Singles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Sell Us Your Cards
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" >
              About us
            </Nav.Link>
            <Nav.Link href="/contact" >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;