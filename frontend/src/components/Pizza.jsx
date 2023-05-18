import React,{useState} from 'react'
import {Card, Button, Row, Col, Modal,Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux';
import {addToCart} from '../actions/cartAction';

const Pizza = ({pizza}) => {
  const [variant, setVariant] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [toppingsList, setToppingsList] = useState([]);
  const toppings = ['Onion','Pepper','Olive','Mushroom','Paneer','Mutton','Cheese'];
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const cartItems = cartState.cartItems;
  const addToCartHandler = () => {
    setShowAlert(true);
    dispatch(addToCart(pizza, quantity, variant,toppingsList))
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const existingPizza = cartItems.find(item => item._id === pizza._id);
  return (
    <>
      <Card style={{ width: '18rem', marginTop: '12px', marginBottom:'22px' }}>
      <Card.Img variant="top" onClick={handleShow} src={pizza.image} style={{height:'200px', cursor:'pointer'}}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr />
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6>Variants</h6>
              <select value={existingPizza ? existingPizza.varient : variant} onChange={e => setVariant(e.target.value)}>
                {pizza.varients.map(varient => (
                  <option key={varient} value={varient}>{varient}</option>
                ))}
              </select>
            </Col>
            <Col md={6}>
              <h6>Quantity</h6>
              <select value={existingPizza ? existingPizza.quantity : quantity} onChange={e => setQuantity(e.target.value)}>
               {[...Array(10).keys()].map((v,i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
               ))}
              </select>
            </Col>
          </Row>
        </Card.Text>
        <h6> Extra Toppings</h6>
        <Row>
          <Col md={12}>
                <Form>
                  <div className="mb-3">
                  {toppings.map((topping) => (
                      <Form.Check
                          inline
                          label={topping}
                          name={topping}
                          type="checkbox"
                          checked={existingPizza?.toppings.includes(topping)}
                          id={`inline-${topping}`}
                          onChange = {(e) => {
                            if(e.target.checked){
                              setToppingsList([...toppingsList, e.target.name]);
                            }else{
                              setToppingsList(toppingsList.filter((topping) => topping !== e.target.name));
                            }
                          }}
                        />
                  ))}
                    </div>
                </Form>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            Price: {pizza.prices[0][variant] * quantity}
          </Col>
          <Col md={6}>
            <Button variant="success" onClick={addToCartHandler} disabled={existingPizza}>{showAlert || existingPizza ? 'Added' : 'Add to Cart' }</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>         
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Card.Img variant="top" src={pizza.image} style={{height:'240px'}}/>
          </div>
          <h5>Description:</h5>
          <h6>{pizza.description}</h6>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Pizza