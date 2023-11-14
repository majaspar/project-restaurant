import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import PopularDishes from '../components/PopularDishes';
import PlaceOrderProcess from '../components/PlaceOrderProcess';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Address from '../components/Address';
import { useRef } from 'react';
import { useInView } from "framer-motion";


export default function Homescreen() {


    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <>
            <div className="header-and-hero HomeScreen">
                <Navbar />
                <div ref={ref} className="margins Homescreen__hero grid">

    
                    <div
                        className="hero__text grid">
                        <h1 style={{
                            opacity: isInView ? 1 : 0,
                            transition: "all 1s ease 0.8s"
                        }}
                            className="center mb3">Your Perfect Italian</h1>
                        <div className="hero__desc--wrapper center">
                            <p style={{
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.2s ease 1s"
                            }}
                                className="hero__desc mt2 mb2">The most delicious flavours that Italian Cuisine has to offer!<br />
                                Have a glass of splendid Sicilian wine and feel like you're on vacatation in sunny Italy.<br />
                                Pizza, Pasta, Steak? <br />
                                We serve all your favourites!</p>
                            <div className="hero__buttons mt4 flex">
                                <a style={{
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 1s ease 1.4s"
                                }}
                                    href="tel:++447788990011"><button className=" ">Phone Us</button></a>
                                <a style={{
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 1s ease 1.6s"
                                }}
                                    href="/#/menu"><button className="">See Menu</button></a>
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
