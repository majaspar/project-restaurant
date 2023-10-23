import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout'
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';



export default function CartScreen() {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    let total = cartItems.reduce((x, item) => x + (item.price * item.qty), 0).toFixed(2)
    const dispatch = useDispatch()
    //console.log(cartstate)


    const [delivery, setDelivery] = useState(true);

    const onOptionChange = e => {
        setDelivery(e.target.value)
    }
    console.log(delivery)

    return (
        <>
            <div className="header-and-hero CartScreen">
                <Navbar />
                <PageTitle content="Checkout" />
            </div>
            <div className="margins mb7">
                <h1 className="mt2 section-title">Basket Items ({cartItems.length})</h1>
                <hr />
                <div className="basket__grid mt2 flex-column">

                    <div className="basket__items--wrapper flex-column">

                        {cartItems.map(item => {

                            const price = (item.price).toFixed(2);
                            const subtotal = Number(item.price * item.qty).toFixed(2);

                            return <div key={item.name} className="basket__item flex-column">
                                <h3 className="basket__item--name uppercase">{item.name}</h3>
                                <div className="basket__price-and-qty flex">
                                    <div>Price: £{price}</div>
                                    <div>Qty:
                                        <i onClick={() => { dispatch(addToCart(item, item.qty - 1)) }} style={{ marginLeft: "1rem", color: "red" }} className="menu__icon fa-solid fa-circle-minus"></i>
                                        <span className="menu__item--qty">{item.qty}</span>
                                        <i onClick={() => { dispatch(addToCart(item, item.qty + 1)) }} style={{ color: "green" }} className="menu__icon fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="basket__subtotal">Subtotal: <b>£{subtotal}</b></div>
                                    <div className="basket__delete-item"><i className="fa-solid fa-trash" onClick={() => { dispatch(deleteFromCart(item)) }}></i></div>
                                </div>
                            </div>

                        })}

                    </div>
                    <div>
                        <h3 className="ff-kaushan mb1">Delivery or Collection?</h3>
                        <div className="basket__radio--buttons mb2 flex">
                            <div>
                                <input type="radio" name="collectionOrDelivery" id="collection" value={false} onChange={onOptionChange} />
                                <label htmlFor='collection'>Collection</label>
                            </div>
                            <div>
                                <input type="radio" name="collectionOrDelivery" id="delivery" defaultChecked value={true} onChange={onOptionChange} />
                                <label htmlFor='delivery'>Delivery</label>
                            </div>

                        </div>
                        <div className="basket__total--wrapper">

                            <h2 className="ff-kaushan">Total:</h2>
                            <hr className="mb2" />
                            <div style={{ textAlign: "right" }}>
                                <div className="basket__total">£{total}</div>
                                <Checkout total={total} delivery={delivery} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
