import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
    <Navbar expand="lg"  style={{ backgroundColor: '#1e90ff' }}>
      <Container fluid>
        <Navbar.Brand href="#">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Link to="/">
            <Nav.Link href="#action1" style={{ color: 'black' }}>Inicio</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link href="#action2" style={{ color: 'black' }}>Productos</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link href="#action2" style={{ color: 'black' }}>Contacto</Nav.Link>
          </Link>
             
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busqueda"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Busqueda</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>

  )
}
