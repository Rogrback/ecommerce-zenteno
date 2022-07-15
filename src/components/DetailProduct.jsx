import { useProductContext } from '../context/ProductContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const DetailProduct = (idProduct) => {
  const context = useProductContext()

  return (
    <>
    {context.loading
      ? <h1>Cargando...</h1>
      : context.listProducts.filter(product => {
        if (context.search === '') {
          return product
        } else if (product.nombre.toLowerCase().includes(context.search.toLowerCase())) {
          return product
        }
        return null
      }).map((product) => (
        <Card
          style={{ width: '18rem' }}
          key={idProduct}
          className="col-6 pt-3"
          onClick={() => {
            context.setSelectedProduct(product)
            console.log(product)
          }}
        >
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>
                {product.marca}
              </Card.Text>
              <Button variant="primary">COMPRAR</Button>
            </Card.Body>              
        </Card>
      ))}
    </>
  )
}
