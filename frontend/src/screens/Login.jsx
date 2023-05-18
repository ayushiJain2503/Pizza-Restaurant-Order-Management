import React,{useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {loginUser} from '../actions/userAction';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginUserHandler = () => {
        const user = {email, password};
        dispatch(loginUser(user))
    };
  return (
    <>
        <Container style={{marginTop:"50px"}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="test@email.com" value={email} onChange={e=> setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={loginUserHandler}>
                  Login
              </Button>
            </Form>
        </Container>
    </>
  )
}

export default Login