import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  // console.log(id);

  // context.listProducts.map(product => (
  //   console.log(product)
  // ))
  // const product = context.listProducts
  // if(product._id === {id}) return product
  useEffect(() => {
    axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
       .then((response) => {
          setProduct(response.data)
          setLoading(false)
       }).catch((error) => {
          console.log(error)
       })       
}, [])   

  return (
    <div class="d-flex justify-content-center">
    {
      loading ?
      <h1>Cargando..</h1>
      :
      (<Card
          border="success"
          style={{ width: '18rem' }}
          className="col-6 pt-3"
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text>
              Marca: {product.brand}
            </Card.Text>
            <Card.Text>
              <h3>
                <p>Precio: ${product.price}</p>
              </h3>
            </Card.Text>
            <Card.Text>
              {product.description}
            </Card.Text>
          </Card.Body>
        </Card>)
    }
    </div>
  )
}
