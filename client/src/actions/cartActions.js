export const addToCart = (dish, qty) => (dispatch, getState) => {

    let cartItem = {
        name: dish.name,
        _id: dish._id,
        qty: Number(qty),
        price: dish.price,
        prices: dish.prices,

    }


    if (cartItem.qty > 10) {
        alert('The maximum quantity for one item is 10')
    } else {
        if (cartItem.qty < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: dish })
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem });

            const successMsg = document.getElementById('success__msg')
            successMsg.style.display = "block";


            const hideSuccessMsg = () => {
                successMsg.style.display = "none";
            }
            setTimeout(hideSuccessMsg, 3500)
        }
    }

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (dish) => (dispatch, getState) => {

    dispatch({ type: 'DELETE_FROM_CART', payload: dish })

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}