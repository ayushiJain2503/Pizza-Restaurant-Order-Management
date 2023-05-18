import axios from "axios";

export const getUserOrders = () => async (dispatch, getState) => {
    const user = getState().loginReducer.currentUser;
    try {
        dispatch({ type: 'USER_ORDERS_REQUEST' });
        const response = await axios.post('/api/orders/getuserorders', { userId: user._id });
        const data = await response.json();
        dispatch({
            type: 'USER_ORDERS_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'USER_ORDERS_FAIL',
            payload: error.message,
        });
    }
};

export const getAllOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: 'ALL_ORDERS_REQUEST' });
        const response = await axios.get('/api/orders/getallorders');
        const data = await response.json();
        dispatch({
            type: 'ALL_ORDERS_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ALL_ORDERS_FAIL',
            payload: error.message,
        });
    }
};