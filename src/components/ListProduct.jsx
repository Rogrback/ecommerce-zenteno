
import product_01 from '../img/product01.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useProductContext } from '../context/ProductContext'

export const ListProduct = () => {
  const context = useProductContext()

  return (
    <>
      {context.loading
        ? <h1>Cargando...</h1>
        : context.listProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              context.setSelectedSong(product)
              console.log(product)
            }}
          >
            <h4>{product.id}</h4>
            <h4>{product.nombre}</h4>
            <p>{product.marca}</p>
          </div>
        ))}
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