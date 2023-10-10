import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from './actions/orderActions';
import StripeCheckout from 'react-stripe-checkout'
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function Checkout({ total }) {

    const orderState = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderState;

    const dispatch = useDispatch()


    const [delivery, setDelivery] = useState(true)
    const onOptionChange = e => {
        setDelivery(e.target.value)
    }
    const tokenHandler = (token) => {
        console.log(token)
        dispatch(placeOrder(token, total, delivery))
        console.log(delivery)
    }
    return (

        <div>
            <hr />
            <div className="basket__radio--buttons flex">

                <div>
                    <input type="radio" name="collectionOrDelivery" id="collection" value={false} onChange={onOptionChange} />
                    <label htmlFor='collection'>Collection</label>
                </div>
                <div>
                    <input type="radio" name="collectionOrDelivery" id="delivery" defaultChecked value={true} onChange={onOptionChange} />
                    <label htmlFor='delivery'>Delivery</label>
                </div>

            </div>
            <hr />
            {loading && <Loading />}
            {error && <Error message="Something went wrong while placing the order." />}
            {success && <Success message="Your order has been placed successfully." />}

            <StripeCheckout
                name="Italian Restaurant"
                amount={total * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey="pk_test_51NLs6gLOk2koDDsjhpD8KKVMZ3X927MnpOLvcJZCOtrwolY77jie9PTCyqKKzgnKa54iUhPvfXcbEdWukGn1COPi00cxHmqH9S"
                currency="GBP"
                allowRememberMe>

                <button className="basket__checkout mt2">Checkout</button>
            </StripeCheckout>

        </div>

    )
}
