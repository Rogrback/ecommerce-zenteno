import axios from 'axios';
import imagen01 from '../img/imagen1.jpg';
import imagen02 from '../img/imagen2.jpg';
import imagen03 from '../img/imagen3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import React from 'react'
import { useEffect, useState } from 'react';
export const Product = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    // getUsers();
    (async () => {
      try{
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setProduct(data);
      } catch(error) {
        console.log("error API", error);
      }
    })();
  }, []);

  return (

    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ferrari</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen02}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Lamborgini</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lexus</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Card.Title>PRODUCTOS</Card.Title>
    <Container fluid="md">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>

    </>
  )
}