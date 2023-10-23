import img1 from '../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import React, { useRef } from 'react';
import { useInView } from "framer-motion";

export default function About() {


    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <section className="about mb7">
            <div className="about__wrapper">
                <div className="about__img">
                    <img className="about__img--img" src={img1} alt="img" />
                </div>

                <div className="about__text--wrapper shadow-dark grid">
                    <div ref={ref} className="about__text shadow flex">
                        <h2 style={{
                            transform: isInView ? "scale(1)" : "scale(1.9)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.8s ease-in 0.5s"
                        }}
                            className="about__title section-title">Enter the World<br />of Delicious Food</h2>

                        <div
                            style={{
                                transform: isInView ? "none" : "translateX(-400px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.5s cubic-bezier(0.68, -0.85, 0.265, 1.55) 0.8s"
                            }}>
                            <p className="text-desc justify">Italian cuisine includes deeply rooted traditions common to the whole country, as well as all the regional gastronomies, different from each other, especially between the north, the centre and the south of Italy, which are in continuous exchange. Many dishes that were once regional have proliferated with variations throughout the country. Italian cuisine offers an abundance of taste, and is one of the most popular and copied around the world.</p></div>


                    </div>
                </div>
            </div>
        </section>
    )
}