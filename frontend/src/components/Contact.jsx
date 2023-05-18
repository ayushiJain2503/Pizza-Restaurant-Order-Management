import React from 'react'
import { Container, Table, Row, Col, Image } from 'react-bootstrap'
import {AiFillPhone, AiFillMail} from 'react-icons/ai';
import {FaMobileAlt} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
        <Container style={{marginTop:'100px'}}>
            <h1>Contact Us</h1>
            <Row>
                <Col md={6}>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr className='bg-warning' >
                            <th colSpan={3}>Contact Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><AiFillPhone></AiFillPhone></td>
                            <td>Landline</td>
                            <td>0123-456</td>
                            </tr>
                            <tr>
                            <td><FaMobileAlt></FaMobileAlt></td>
                            <td>Mobile</td>
                            <td>0123-456</td>
                            </tr>
                            <tr>
                            <th><AiFillMail></AiFillMail></th>
                            <td>Email</td>
                            <td>abc@123</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Image src="images/farmhouse.jpg" style={{width: '100%', height: '75%'}}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact;