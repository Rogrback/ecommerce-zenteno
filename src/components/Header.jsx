import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import imageZenteno from '../img/logos/logo_zenteno.png';

export const Header = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#1e90ff' }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={imageZenteno}
              className='w-100 h-75'
              alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mx-100"
              navbarScroll
            >
              <Nav.Link as = {Link}
                to="/"
                className='text-dark fs-4'>
                Inicio
              </Nav.Link>
              <Nav.Link as = {Link}
                to="/productos"
                className='text-dark fs-4'>
                Productos
              </Nav.Link>
              <Nav.Link as = {Link}
                to="/contacto"
                className='text-dark fs-4'>
                Contacto
              </Nav.Link>
              <Nav.Link as = {Link}
                to="/registro"
                className='text-dark fs-4'>
                Registrarse
              </Nav.Link>
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
