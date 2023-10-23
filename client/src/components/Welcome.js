import React from 'react'
import { useRef } from 'react';
import { useInView } from "framer-motion";
import './Welcome.css';


import img1 from '../assets/eiliv-aceron-wNQoaYCFcsI-unsplash.jpg';
import img2 from '../assets/elevate-iv6yNy7oBqQ-unsplash.jpg';
import vector1 from '../assets/vector1.svg';
import pizza from '../assets/pizza.png';



export default function Welcome() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <section className="Welcome margins mt5 mb7">
            <div ref={ref} className="Welcome__wrapper flex">
                <div style={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className="Welcome__imgs">
                    <img className="Welcome__vector-1" src={vector1} alt="S-shaped line for decorating background" />
                    <img className="Welcome__img-1 shadow-dark" src={img1} alt="chef cooking" />
                    <img className="Welcome__img-2 shadow" src={img2} alt="chef cooking" />
                </div>
                <div className="Welcome__text center">

                    {/*div wrapper to center content */}

                    <div style={{
                        transform: isInView ? "none" : "translateY(400px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }} className="Welcome__text--wrapper">
                        <h2 className="mb2 section-title" >
                            Welcome to<br />
                            Italian Restaurant</h2>
                        <p className="text-desc mb2">Chefs with over 20 years of experience make sure that every dish is cooked to perfection. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major contributions to the restaurant's development.</p>


                        <img className="Welcome__img-pizza" src={pizza} alt="floating and rotating pizza icon" />

                    </div>
                </div>

            </div>

        </section>
    )
}
