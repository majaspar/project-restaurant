import React, { useRef } from 'react';
import inside from '../assets/adrien-olichon-XB1W7TlTaxQ-unsplash.jpg';
import SocialMediaIcons from './SocialMediaIcons';
import { useInView } from "framer-motion";

export default function Address() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <div className="Address margins mt7 mb7">

            <div className="Address__grid center flex">
                <div>
                    <h2 style={{
                        transform: isInView ? "scale(1)" : "scale(0.1)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                        className="section-title">Italian Restaurant</h2>
                    <p ref={ref} className="mt2 mb2"><i className="fa-solid fa-diamond"></i>
                        <i className="fa-solid fa-diamond"></i>
                        <i className="fa-solid fa-diamond"></i></p>
                    <p style={{
                        transform: isInView ? "scale(1)" : "scale(0.1)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                    }}
                        className="Address__address">Bond Street<br /> Broadmead<br /> BRISTOL<br /> BS1 3BD</p>
                    <p className="mt2 mb2 center"><i className="fa-solid fa-diamond"></i>
                        <i className="fa-solid fa-diamond"></i>
                        <i className="fa-solid fa-diamond"></i></p>
                    <p style={{
                        transform: isInView ? "scale(1)" : "scale(0.1)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
                    }}
                        className="Address__phone"><i className="fa-solid fa-phone"></i>  0 7788 990 011</p>
                    <p className="mt2 mb2 center"><i className="fa-solid fa-diamond"></i>
                        <i className="fa-solid fa-diamond"></i>
                        <i className="fa-solid fa-diamond"></i>
                    </p>
                    <div className="mb3 grid" style={{
                        transform: isInView ? "scale(1)" : "scale(0.1)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
                        placeItems: "center"
                    }}><SocialMediaIcons /></div>
                </div>
                <div style={{
                    transform: isInView ? "scale(1)" : "scale(0.2)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.68, -0.85, 0.265, 1.55) 0.3s"
                }} className="Address__img shadow-dark" >
                    <img style={{ animation: "scaleImg 60s infinite" }} src={inside} alt="inside of the restaurant" />
                </div>
            </div>
        </div>
    )
}
