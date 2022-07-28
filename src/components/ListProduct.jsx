import { useProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';
// import product_01 from '../img/product01.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import {DetailProduct} from './DetailProduct'
import { SearchProduct } from './SearchProduct';

export const ListProduct = () => {
  const context = useProductContext()

  return (
    <>
      <SearchProduct />
      <h2 className="display-2 row justify-content-center text-center m-3 mb-0">
        PRODUCTOS
      </h2>
      <div className="row justify-content-center p-4 gap-4">
        {context.loading
          ? <h1>Cargando...</h1>
          : context.listProducts.filter(product => {
            if (context.search === '') {
              return product
            } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
              return product
            }
            return null
          }).map((product, index) => (
            <Card
              border="primary"
              style={{ width: '18rem' }}
              key={index}
              className="col-6 pt-3"
              onClick={() => {
                context.setSelectedProduct(product)
              }}
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>
                  {product.marca}
                </Card.Text>
                <Link to={`/product/${product._id}`} >
                  <Button variant="primary">VER DETALLES</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  )
}