import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useProductContext } from '../context/ProductContext'

export const SearchProduct = () => {
  
  const context = useProductContext()

  const onAddChange = (e) => {
    e.preventDefault();
    context.setSearch(e.target.value);
    console.log(e.target.value);
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
            onChange={e => onAddChange(e)}
          />
          </Col>          
        </Row>
        </Form>
      </Container>      
    </>
  )
}
