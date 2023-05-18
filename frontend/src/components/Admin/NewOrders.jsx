import React, {useState} from 'react'
import {Form, Row, Col, Button, Modal} from 'react-bootstrap'
import CartScreen from '../../screens/CartScreen';
import {useSelector} from 'react-redux'
import PizzaList from '../../screens/PizzasList';

const NewOrders = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [show, setShow] = useState(false);
    const placeOrder = (e) => {}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
  return (
    <>  
        <Row className='mb-3'>
            <Col md={6}>
                <Form onSubmit={placeOrder}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={setEmail} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Contact Number" value={phoneNumber} onChange={setPhoneNumber} required/>
                    </Form.Group>
                    <Button variant="primary" onClick={handleShow}>
                        {cartItems.length === 0 ? 'Add order items' : 'Edit order items'}
                    </Button>
                </Form>
            </Col>
            <Col md={6}>
                {cartItems.length > 0 ? (<CartScreen />) : ""}
            </Col>
        </Row>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            fullscreen={true}
        >
            <Modal.Header closeButton>
                <Modal.Title>Select pizzas to order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PizzaList />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    Submit Order
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default NewOrders