import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Welcome from '../Welcome';
import PopularDishes from '../PopularDishes';
import PlaceOrderProcess from '../PlaceOrderProcess';
import About from '../About';
import Reviews from '../Reviews';
import Address from '../Address';

const containerVariants = {
    hidden: {
        y: '5vh',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.4, staggerChildren: 0.5, when: 'beforeChildren'
        }
    }
}
const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    transition: {
        duration: 1.5,

    }

}
export default function Homescreen() {

    return (
        <>
            <div className="header-and-hero HomeScreen">
                <Navbar />
                <div className="margins Homescreen__hero grid">

                    <motion.div
                        variants={containerVariants}
                        initial='hidden'
                        animate='visible'
                        className="hero__text grid">
                        <motion.h1 variants={childVariants} className="center mb3">Your Perfect Italian</motion.h1>
                        <div className="hero__desc--wrapper center">
                            <motion.p variants={childVariants}
                                className="hero__desc mt2 mb2">The most delicious flavours that Italian Cuisine has to offer!<br />
                                Have a glass of splendid Sicilian wine and feel like you're on vacatation in sunny Italy.<br />
                                Pizza, Pasta, Steak? <br />
                                We serve all your favourites!</motion.p>
                            <motion.div variants={childVariants}
                                className="hero__buttons mt4 flex">
                                <motion.a whileHover={{ scale: 1.1 }} href="tel:++447788990011"><button className=" ">Phone Us</button></motion.a>
                                <motion.a whileHover={{ scale: 1.1 }} href="/#/menu"><button className="">See Menu</button></motion.a>
                            </motion.div>
                        </div>
                    </motion.div>

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
