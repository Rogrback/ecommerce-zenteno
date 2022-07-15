import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useProductContext } from '../context/ProductContext'

export const SearchProduct = () => {
  
  const context = useProductContext()
  const [query, setQuery] = useState("")

  const onAddChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <>
      <Container fluid="md" className="pt-4">
      <Form> 
        <Row>                   
          <Col><Form.Control
            type="search"
            placeholder="Buscar producto"
            className="me-2 col-8"
            aria-label="Search"
            onChange={e => onAddChange(e.target.value)}
          />
          {
            context.listProducts.filter(product => {
              if (query === '') {
                return product;
              } else if (product.nombre.includes(query)) {
                return product;
              }
              return product
            }).map((product, index) => (
              <div key={index}>
                <p>{product.nombre}</p>
                <p>{product.marca}</p>
              </div>
            ))
            // Muestra la data completa pero a la hora de escribir en el Input no hace el filter
            //Inclui el e.preventDefault() por el tema de ser un formulario, caso constrario es otro problema
          }
          </Col>          
        </Row>
        </Form>
      </Container>


    </>
  )
}
