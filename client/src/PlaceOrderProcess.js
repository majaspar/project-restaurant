

export default function Navbar() {
    return (
        <section className="place-order">
            <div className="place-order__wrapper margins">
                <h2 className="section-title center placeOrderAnimation">

                    Your Italian Dinner Is Only 3 Steps Away...</h2>


                <div className="place-order__grid">

                    <div className="place-order__grid--item flex-column center">
                        <i className="place-order__icon fa-regular fa-user"></i>
                        <h3>Quick Account Setup</h3>
                    </div>

                    <span className="place-order__arrow--right">&rarr;</span>
                    <span className="place-order__arrow--down">&darr;</span>
                    <div className="place-order__grid--item flex-column center">
                        <i className="place-order__icon fa-solid fa-motorcycle"></i>
                        <h3>Collection or Delivery?</h3>
                    </div>

                    <span className="place-order__arrow--right">&rarr;</span>
                    <span className="place-order__arrow--down">&darr;</span>

                    <div className="place-order__grid--item flex-column center">
                        <i className="place-order__icon fa-solid fa-cart-shopping"></i>
                        <h3>Complete Checkout</h3>
                    </div>
                </div>

            </div>
        </section>
    )
}