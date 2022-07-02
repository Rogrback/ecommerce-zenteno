
import product_01 from '../img/product01.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


export const ListProduct = () => {


  return (
    <>
    <Card.Title className="container text-center col-md-4 p-5">PRODUCTOS</Card.Title>
      <div className="row justify-content-md-center p-4 gap-5">
        <Card style={{ width: '18rem' }} className="col-6 col-md-auto">
          <Card.Img variant="top" src={product_01} />
          <Card.Body>
            <Card.Title>Aceite Motul</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content ljljl.
            </Card.Text>
            <Button variant="primary">COMPRAR</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="col-6">
          <Card.Img variant="top" src={product_01} />
          <Card.Body>
            <Card.Title>Aceite Motul</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content ljljl.
            </Card.Text>
            <Button variant="primary">COMPRAR</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="col-6">
          <Card.Img variant="top" src={product_01} />
          <Card.Body>
            <Card.Title>Aceite Motul</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content ljljl.
            </Card.Text>
            <Button variant="primary">COMPRAR</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="col-6">
          <Card.Img variant="top" src={product_01} />
          <Card.Body>
            <Card.Title>Aceite Motul</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content ljljl.
            </Card.Text>
            <Button variant="primary">COMPRAR</Button>
          </Card.Body>
        </Card>
        </div>
    </>
  )
}