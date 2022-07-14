
import product_01 from '../img/product01.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useProductContext } from '../context/ProductContext'

export const ListProduct = () => {
  const context = useProductContext()

  return (
    <>
      <h2 className="display-2 row justify-content-center text-center m-3 mb-0">
        PRODUCTOS
      </h2>
      <div className="row justify-content-center p-4 gap-4">
        {context.loading
          ? <h1>Cargando...</h1>
          : context.listProducts.map((product) => (
            <Card
              style={{ width: '18rem' }}
              key={product.id}
              className="col-6 pt-3"
              onClick={() => {
                context.setSelectedSong(product)
                console.log(product)
              }}
            >
                <Card.Img variant="top" src={product_01} />
                <Card.Body>
                  <Card.Title>{product.nombre}</Card.Title>
                  <Card.Text>
                    {product.marca}
                  </Card.Text>
                  <Button variant="primary">COMPRAR</Button>
                </Card.Body>
              
            </Card>
          ))}
      </div>
    </>
  )
}