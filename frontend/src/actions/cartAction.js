export const addToCart = (pizza, quantity, varient,toppings) => (dispatch, getState) => {
    let cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        toppings: toppings,
        totalAmount: pizza.prices[0][varient] * quantity + 20*toppings.length
    }
    if(cartItem.quantity > 10 || cartItem.quantity < 0) {
        alert('You cannot add more than 10 quantities');
    } else if(cartItem.quantity < 1) {
        dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    } 
    else{
        dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    }
}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
}

export const emptyCart = () => (dispatch, getState) => {
    dispatch({ type: 'EMPTY_CART' });
    localStorage.setItem('cartItems', []);
}