// const addQty = () => {
//     setQty(qty => qty + 1)
// }
// const deductQty = () => {
//     if (qty >= 1) {
//         setQty(qty => qty - 1)
//     } else {
//         return qty === 1
//     }
// }

const roundPrice = (price, qty) => {
    const rounded = Math.round(price * 100) / 100
    const multipliedPrice = rounded * qty
    return multipliedPrice.toFixed(2)
}

export { roundPrice }