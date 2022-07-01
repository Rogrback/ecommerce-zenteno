
import product_01 from '../img/product01.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React from 'react'


export const Product = () => {


  return (
    <>
    <Card.Title>PRODUCTOS</Card.Title>
    <Container fluid="md">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ product_01 } />
      <Card.Body>
        <Card.Title>Aceite Motul</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content ljljl.
        </Card.Text>
        <Button variant="primary">COMPRAR</Button>
      </Card.Body>
    </Card>
    </Container>

    </>
  )
}