import React, { useState } from "react";
import { roundPrice } from "./utils";
import { useDispatch } from 'react-redux'
import { addToCart } from "./actions/cartActions";

export default function MenuGridItem({ dish }) {
    const [qty, setQty] = useState(1)
    const addQty = () => {
        setQty(qty => qty + 1)
    }
    const deductQty = () => {
        if (qty >= 1) {
            setQty(qty => qty - 1)
        } else {
            return qty === 1
        }
    }

    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCart(dish, qty))
    }

    return (
        <div className="menu__grid--item mb1">

            <div className="menu__dish--name">
                <h3>{dish.name}
                    {dish.isVegetarian && <i className="menu_icon-vegetarian fa-solid fa-leaf"></i>}

                </h3>
                <p className="menu__dish--description">{dish.description}</p>
            </div>
            <div className="menu__qty-span center">Qty:
                <button style={{ marginLeft: "1rem" }} className="no-button" onClick={deductQty}><i
                    style={{ color: "red" }}
                    className="menu__icon fa-solid fa-circle-minus"></i></button>
                <span className="menu__item--qty"> <b>{qty} </b> </span>
                <button className="no-button" onClick={addQty}><i
                    style={{ color: "green" }}
                    className="menu__icon fa-solid fa-circle-plus"></i></button>
            </div>
            <div className="menu__dish--price center">Price: £{roundPrice(dish.price, qty)}</div>
            <button className="menu__btn--add" onClick={addtocart}>Add</button>
        </div >
    )
}