import { useState } from "react";

export default function Dish({ dish }) {

    return (
        <div className="menu__grid--item grid mb1">
            <h3 className="">{dish.name}</h3>
            <div>Category: {dish.category}</div>
            <div>Price: £{dish.price}</div>
            <div>Description: £{dish.description}</div>
            <button className="menu__btn--add">Add</button>
        </div>
    )
}