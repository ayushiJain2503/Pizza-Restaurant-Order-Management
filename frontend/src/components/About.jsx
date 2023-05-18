import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

const About = () => {
  return (
    <>
        <Container style={{marginTop:'100px'}}>
            <h1>Who we are</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Row>
                <h1>Our speciality</h1>
                <Col md={6}>
                    <p>Dummy Text</p>
                </Col>
                <Col md={6}>
                    <p>Dummy Text</p>
                </Col>
            </Row>
            <Row>
                <h1>Our Chef</h1>
                <Col md={3}>
                    <p>Dummy Text</p>
                </Col>
                <Col md={3}>
                    <p>Dummy Text</p>
                </Col>
                <Col md={3}>
                    <p>Dummy Text</p>
                </Col>
                <Col md={3}>
                    <p>Dummy Text</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default About;