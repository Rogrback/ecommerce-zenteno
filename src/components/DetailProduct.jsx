import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
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
    <>
      {
        loading ?
        <h1>Cargando..</h1>
        :
        (<Card
              style={{ width: '18rem' }}
              className="col-6 pt-3"
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>
                  {product.brand}
                </Card.Text>
              </Card.Body>
            </Card>)
      }
      
    </>
  )
}
