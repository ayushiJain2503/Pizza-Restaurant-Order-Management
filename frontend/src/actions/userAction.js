import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    try {
        const response = await axios.post('/api/users/register', user);
        const result = await response.json();
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
        console.log(result);
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error });
        console.log(error);
    }
};

export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    try {
        const response = await axios.post('/api/users/login', user);
        const result = await response.json();
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: result });
        localStorage.setItem('currentUser', JSON.stringify(result));
        window.location.href = '/';
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
    }
};
