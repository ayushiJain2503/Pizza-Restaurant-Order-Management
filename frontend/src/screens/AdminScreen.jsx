import React from 'react'
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap'
import OrdersList from '../components/Admin/OrdersList'
import NewOrders from '../components/Admin/NewOrders'

const AdminScreen = () => {
  return (
    <>
        <Container style={{marginTop:"20px"}}>
            <h3 className='text-center bg-dark text-light p-2'>Admin Panel</h3>
            <Row>
                <Col md={12}>
                    <Tabs
                        defaultActiveKey="ordersList"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                        >
                        <Tab eventKey="ordersList" title="All Orders">
                            <OrdersList />
                        </Tab>
                        <Tab eventKey="newOrder" title="New Orders">
                            <NewOrders />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AdminScreen