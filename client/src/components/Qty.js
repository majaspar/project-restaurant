import { useState } from "react";

export default function Qty() {
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

    return (

        <div>Qty:
            <i onClick={deductQty}
                style={{ marginLeft: "1rem", color: "red" }}
                className="menu__icon fa-solid fa-circle-minus"></i>
            <span className="menu__item--qty">{qty}</span>
            <i onClick={addQty}
                style={{ color: "green" }}
                className="menu__icon fa-solid fa-circle-plus"></i>
        </div>
    )
}
