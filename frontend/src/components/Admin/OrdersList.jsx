import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getAllOrders} from '../../actions/orderAction'
import {Table, Popover,OverlayTrigger} from 'react-bootstrap'
import orders from '../../orders-list'
import  useWebSocket  from 'react-use-websocket';
import "../../css/styles.css"

const WS_URL = 'ws://127.0.0.1:8000';

const popover = (stage) => (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Pizza Process</Popover.Header>
    <Popover.Body>
      <span>
        <ul style={{paddingLeft: '8px'}}>
          <li style={{color: stage==="Dough Chef" ? "lightgreen" : "black"}}>Dough Chef</li>
          <li style={{color: stage==="Topping Chef" ? "lightgreen" : "black"}}>Toppings Chef</li>
          <li style={{color: stage==="Oven" ? "lightgreen" : "black"}}>Oven</li>
          <li style={{color: stage==="Serving" ? "lightgreen" : "black"}}>Serving</li>
          <li style={{color: stage==="Done" ? "lightgreen" : "black"}}>Done</li>
        </ul>
      </span>
    </Popover.Body>
  </Popover>
);


const OrdersList = () => {
    const getAllOrdersReducer=useSelector(state=>state.getAllOrdersReducer);
    const {ordersList,loading,error}=getAllOrdersReducer;
    const { sendMessage, lastMessage } = useWebSocket(WS_URL, {
      share: true
    });
    const dispatch=useDispatch();
    useEffect(()=>{
        const ordersArray = lastMessage?.data?.orders || [];
        dispatch(getAllOrders())
    },[dispatch]);
   
  return (
    <>
        <h3>Orders List</h3>
        {loading && (<h1>Loading...</h1>)}
        {/* {error && (<h1>Something went wrong.Please reload the application</h1>)} */}
        <Table bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User ID</th>
              <th>Amount</th>
              <th>Order Status</th>
              <th>Time to complete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.map(order=>{
              return <tr key={order.id}>
                <td style={{color: "blue"}}>{order.id}</td>
                <td>{order.userId}</td>
                <td>{order.price}</td>
                <td style={{color: order.stage==="Done" ? "lightgreen" : "yellow"}}>
                  <OverlayTrigger trigger="click" placement="right" overlay={popover(order.stage)}>
                    <strong><td>{order.stage}</td></strong>
                  </OverlayTrigger></td>
                <td>{order.stage === "Done" ? order.time : ""}</td>
                <td>{order.description}</td>
              </tr>
            })}
          </tbody>
        </Table>
    </>
  )
}

export default OrdersList