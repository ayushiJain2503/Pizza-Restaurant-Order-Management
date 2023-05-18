import React,{useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {registerUser} from '../actions/userAction';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const registerUserHandler = () => {
        if(password !== confirmPassword){
            alert('Password not matched');
        }else{
            const user = {email, password};
            dispatch(registerUser(user))
        }
    };
  return (
    <>
        <Container style={{marginTop:"50px"}}>
            <Form>
             <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="FirstName LastName" value={name} onChange={e=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="test@email.com" value={email} onChange={e=> setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/>
            </Form.Group>
             <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="text" placeholder="Confirm Password" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={registerUserHandler}>
                Register
            </Button>
            </Form>
        </Container>
    </>
  )
}

export default Register