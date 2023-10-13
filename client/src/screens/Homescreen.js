import React from 'react';
import Navbar from '../Navbar';
import Welcome from '../Welcome';
import PopularDishes from '../PopularDishes';
import PlaceOrderProcess from '../PlaceOrderProcess';
import About from '../About';
import Reviews from '../Reviews';
import Address from '../Address';

export default function Homescreen() {

    return (
        <>
            <div className="header-and-hero HomeScreen">
                <Navbar />
                <div className="margins hero grid PageTitle">

                    <div className="hero__text mt3 mb5 flex-column">
                        <h1 className="center">Your Perfect Italian</h1>
                        <div className="mb7 center">
                            <p className="hero__desc mt2 mb2">The most delicious flavours that Italian Cuisine has to offer!<br />
                                Have a glass of splendid Sicilian wine and feel like you're in South of Italy.<br />
                                Pizza, Pasta, Steak or Pollo? <br />
                                Whatever your favourite - we've got it!</p>
                            <div className="hero__buttons mt4 flex">
                                <a href="tel:++447788990011"><button className="uppercase">Phone Us</button></a>
                                <a href="/#/menu"><button className="uppercase">See Menu</button></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Welcome />
            <PopularDishes />
            <About />
            <Reviews />
            <PlaceOrderProcess />
            <Address />
        </>
    )
}
