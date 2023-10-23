import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import StripeCheckout from 'react-stripe-checkout'
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function Checkout({ total, delivery }) {

    const orderState = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderState;
    const userState = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userState;

    const dispatch = useDispatch()

    const tokenHandler = (token) => {
        //console.log(token)
        dispatch(placeOrder(token, total, delivery))

    }
    return (

        <div>

            {loading && <Loading />}
            {error && <Error message="Something went wrong while placing the order." />}
            {success && <Success message="Your order has been placed successfully." />}


            {currentUser ?
                <StripeCheckout
                    name="Italian Restaurant"
                    amount={total * 100}
                    shippingAddress
                    billingAddress
                    token={tokenHandler}
                    stripeKey="pk_test_51NLs6gLOk2koDDsjhpD8KKVMZ3X927MnpOLvcJZCOtrwolY77jie9PTCyqKKzgnKa54iUhPvfXcbEdWukGn1COPi00cxHmqH9S"
                    currency="GBP"
                    allowRememberMe>

                    <button className="basket__checkout mt2">Checkout</button>
                </StripeCheckout>
                :
                <p className="mt2 mb1 center">You need to be logged in to place an order.<br /><Link to="/login"><span style={{ textDecoration: "underline" }}>Go to Login</span></Link></p>}
        </div>

    )
}
