import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export const FormClient = () => {
  return (
    <div className="container p-2 mx-auto">
      <div className="row justify-content-md-center">
        <Form className='col-md-12 border border-1 rounded-2'>
          <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className='d-flex flex-column'>
            <Button className='btn-lg  mb-2' variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
