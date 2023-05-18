import React, {useEffect} from 'react'
import AllPizza from '../pizza-data'
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../components/Pizza';
import { useSelector,useDispatch } from 'react-redux';
import {getAllPizzas} from '../actions/pizzaActions';

const PizzaList = () => {
    const dispatch = useDispatch();
    const pizzaState = useSelector(state => state.getAllPizzasReducer);
    const {loading,pizzas,error} = pizzaState || {};
    useEffect(() => {
        dispatch(getAllPizzas());
    },[dispatch]);
    return (
        <>
            <Container>
                {
                    loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>) : (<Row>
                    { AllPizza.map((pizza) => (
                        <Col md={4}>
                            <Pizza key={pizza} pizza={pizza} />
                        </Col>
                    ) )}
                </Row>)
                }
            </Container>
        </>
    )
}

export default PizzaList