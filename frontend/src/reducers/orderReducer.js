export const getAllOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case 'ALL_ORDERS_REQUEST':
            return {
                loading: true,
                ...state,
            };
        case 'ALL_ORDERS_SUCCESS':
            return {
                orders: action.payload,
                loading: false,
            };
        case 'ALL_ORDERS_FAIL':
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case 'USER_ORDERS_REQUEST':
            return {
                loading: true,
                ...state,
            };
        case 'USER_ORDERS_SUCCESS':
            return {
                orders: action.payload,
                loading: false,
            };
        case 'USER_ORDERS_FAIL':
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};