import React from 'react';
import {Navbar, Nav, Container, Image, Badge} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector} from 'react-redux';

const TopBar = () => {
    const cartState = useSelector(state => state.cartReducer);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Image src="images/logo.png" alt="logo" style={{width: '120px', height: '30px'}}></Image>
                    </Navbar.Brand>
                    <Nav>
                        <LinkContainer to='/' activeClassName>
                             <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ms-auto justify-content-end">
                        <LinkContainer to='/about' activeClassName>
                             <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact' activeClassName>
                             <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
 };

 export default TopBar;