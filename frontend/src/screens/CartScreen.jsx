import React, {useState} from 'react'
import {Row, Col, Container, Button, Form, Spinner, Alert} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {FaMinusCircle, FaPlusCircle, FaTrashAlt} from 'react-icons/fa'
import {addToCart, deleteFromCart, emptyCart} from '../actions/cartAction'

const CartScreen = () => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const addQuantity = (item) => {
        dispatch(addToCart(item, item.quantity+1, item.varient, item.topping ? item.topping : []))
    };
    const minusQuantity = (item) => {
        dispatch(addToCart(item, item.quantity-1, item.varient, item.toppings? item.toppings : []))
    };
    const deleteFromCartHandler = (item) => {
        dispatch(deleteFromCart(item))
    };
    const subTotal = cartItems.reduce((x, item) => x + item.prices[0][item.varient] * item.quantity + 20*item?.toppings?.length, 0);
    setTimeout(() => {
        if(loading) {
            dispatch(emptyCart())
            setLoading(false)
        }
    },2000);
    setTimeout(() => {
        if(showSuccessAlert) {
            setShowSuccessAlert(false)
        }
    }, 4000);
    const checkoutHandler = () => {
        setShowSuccessAlert(true)
        setLoading(true);
    } 
  return (
    <>
        <Container>
                {showSuccessAlert ? 
                    <Alert variant="success">
                        Your order is placed successfully!
                    </Alert>
                    : ''
                }
            <Row>
                <h3>Cart Items: </h3>
                <Row>
                    {cartItems.map(item => (
                        <>
                            <Col md={7}>
                                <h5>{item.name} [{item.varient}]</h5>
                                <h6>Extra Toppings:
                                {item.toppings.map(topping => (<span>{topping + ','}</span>))}
                                </h6>
                                <h6>
                                    Price: {item.quantity} X {item.prices[0][item.varient]}{item.toppings.length > 0 ? '  + ' + item.toppings.length +'X 20': ''}  = {item.totalAmount}
                                </h6>
                                <h6>Quantity: &nbsp;
                                    <FaMinusCircle 
                                        className='text-danger' 
                                        style={{cursor:'pointer'}} 
                                        onClick={() => {minusQuantity(item)}} 
                                    />&nbsp;
                                    {item.quantity} &nbsp;
                                    <FaPlusCircle 
                                        className='text-success' 
                                        style={{cursor:'pointer'}} 
                                        onClick={() => {addQuantity(item)}}
                                    />
                                </h6>
                            </Col>
                            <Col md={5} style={{paddingLeft:'8px'}}>
                                <img src={item.image} alt={item.name} style={{height:'80px', width: '120px'}}/> &nbsp; &nbsp;
                                <FaTrashAlt className='text-danger'
                                        style={{cursor:'pointer'}} 
                                        onClick={() => {deleteFromCartHandler(item)}} 
                                />
                            </Col>
                            <hr />
                        </>
                    ))}
                </Row>
            </Row>
             <Row>
                <Col md={3}>
                    <h4>Payment:</h4>
                </Col>
                <Col md={9}>
                    <h4>Total Amount: {subTotal}</h4> 
                </Col>
            </Row>
            <Row>
                <Form>
                    <div className="mb-3">
                    <Form.Check
                        inline
                        label="Cash On Delivery"
                        name="mode"
                        type="radio"
                        id="COD"
                    />
                    <Form.Check
                        inline
                        label="Card"
                        name="mode"
                        type="radio"
                        id="Card"
                    />
                    </div>
                </Form>
            </Row>
            <Button className='bg-success' onClick={checkoutHandler}>Checkout</Button> &nbsp; &nbsp; &nbsp;
            {loading? <Spinner animation="border" variant="success" /> : ''}
        </Container>
    </>
  )
}

export default CartScreen