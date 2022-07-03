
import product_01 from '../img/product01.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


export const ListProduct = () => {


  return (
    <>
      <h2 className="display-2 row justify-content-center text-center m-3 mb-0">
        PRODUCTOS
      </h2>
        <div className="row justify-content-center p-4 gap-4">
          <Card style={{ width: '18rem' }} className="col-6 pt-3">
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
          <Card style={{ width: '18rem' }} className="col-6 p-3">
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
          <Card style={{ width: '18rem' }} className="col-6 p-3">
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
          <Card style={{ width: '18rem' }} className="col-6 p-3">
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