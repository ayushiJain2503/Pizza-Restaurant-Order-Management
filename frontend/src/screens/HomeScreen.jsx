import React from 'react'
import { Container, Carousel} from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <Container>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/Home1.PNG"
                        alt="Get Franchise"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/Home2.PNG"
                        alt="Get Gift cards"
                        />
                    </Carousel.Item>
                     <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/Home3.PNG"
                        alt="Order Pizza"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default HomeScreen