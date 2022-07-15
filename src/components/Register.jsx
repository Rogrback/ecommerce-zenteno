import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import useForm from '../Hooks/useForm';

export const Register = () => {

    const [cliente, setCliente] = useState({
        pais: '',
        usuario: '',
        correo: '',
        password: ''
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setTimeout(() => {
            const info = {
                // JSON que manda el BackEnd
                pais: 'Colombia',
                usuario: 'rogerz',
                correo: 'rogerz@gmail.com',
                password: '123456'
            }
            setCliente(info)
        }, 2000)
    }, [])

    const { input, handleInputChange, handleSubmit } = useForm(handleShow, cliente)

    return (
        <>
            <Form className='p-5'>
                <Form.Select aria-label="Default select example" className='mb-4' onChange={handleInputChange} value={input.pais} name='pais'>
                    <option value=''>Elige tu pais</option>
                    <option value='Colombia'>Colombia</option>
                    <option value='Mexico'>Mexico</option>
                    <option value='Peru'>Peru</option>
                </Form.Select>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" htmlFor='usuario'>@</InputGroup.Text>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleInputChange}
                        value={input.usuario}
                    />
                </InputGroup>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label htmlFor='email'>Email</label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange}
                        value={input.correo} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <label htmlFor='password'>Password</label>
                    <Form.Control type="password" placeholder="Password" onChange={handleInputChange}
                        value={input.password} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pais: {input.pais}</Modal.Body>
                <Modal.Body>Usuario: {input.usuario}</Modal.Body>
                <Modal.Body>Correo: {input.correo}</Modal.Body>
                <Modal.Body>Password: {input.password}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
