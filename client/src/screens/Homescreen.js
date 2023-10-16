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
                <div className="margins Homescreen__hero grid">

                    <div className="hero__text grid">
                        <h1 className="center mb3">Your Perfect Italian</h1>
                        <div className="hero__desc--wrapper center">
                            <p className="hero__desc mt2 mb2">The most delicious flavours that Italian Cuisine has to offer!<br />
                                Have a glass of splendid Sicilian wine and feel like you're on vacatation in sunny Italy.<br />
                                Pizza, Pasta, Steak? <br />
                                We serve all your favourites!</p>
                            <div className="hero__buttons mt4 flex">
                                <a href="tel:++447788990011"><button className=" ">Phone Us</button></a>
                                <a href="/#/menu"><button className="">See Menu</button></a>
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
