import ReviewItem from './ReviewItem';
import Star from './Star'
import React, { useRef } from 'react';
import { useInView } from "framer-motion";

import { useSelector } from "react-redux";
import placeholder from '../assets/testimonial-photo.jpg';
import placeholder2 from '../assets/photo-1580489944761-15a19d654956.jpg';
import placeholder3 from '../assets/photo-1549351512-c5e12b11e283.jpg';

export default function Reviews() {

  const ref = useRef(null);
  const isInView = useInView(ref);

  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;
  // const star1 = <Star />
  // const star2 = [<Star />, <Star />]
  // const star3 = [<Star />, <Star />, <Star />]
  const star4 = [<Star key="1" />, <Star key="2" />, <Star key="3" />, <Star key="4" />]
  const star5 = [<Star key="1" />, <Star key="2" />, <Star key="3" />, <Star key="4" />, <Star key="5" />]
  return (
    <section className="reviews">
      <div className="reviews__wrapper margins">
        <h2 style={{
          transform: isInView ? "scale(1)" : "scale(0.1)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className="section-title center mb5">Read Our Reviews</h2>
        <ul ref={ref} className="reviews__grid grid">

          <li style={{
            transform: isInView ? "none" : "translateX(-400px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
            <ReviewItem reviewer="Nikki Chapman" rating={star4} avatar={placeholder} review="These guys are great! I had an amazing pizza last time I was there. All products top quality. It's a bit far from the city centre, though..." />
          </li>
          <li style={{
            transform: isInView ? "scale(1)" : "scale(0.1)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
            <ReviewItem reviewer="Alice Whittman" rating={star5} avatar={placeholder2} review="The best carbonarra I've ever had! 5/5 stars. Honestly, guys, there's no better place for Italian cuisine than this restaurant!" />
          </li>
          <li style={{
            transform: isInView ? "none" : "translateX(400px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
            <ReviewItem reviewer="Veronica Smith" rating={star5} avatar={placeholder3} review="Amazing place! Everything I tasted was delicious. The chef made my favourite customized pizza with all the best toppings! Yum!" />
          </li>
        </ul>

        {!currentUser && <h2 className="section-title center mt7 mb3">Would You Like to Leave a Review? &rarr; <a href="/#/login">Log In</a></h2>}
      </div> </section>

  )
}