import React from 'react';
import PopularDishItem from './PopularDishItem';
import { useInView } from "framer-motion"
import { useRef } from 'react';

import dish3 from '../assets/carissa-gan-KSXvrqKUxnc-unsplash1.jpg'
import pizza from '../assets/photo-1594007654729-407eedc4be65.jpg'
import dish1 from '../assets/danijela-prijovic-qits91IZv1o-unsplash1.jpg'
import dish2 from '../assets/01.jpg'


export default function PopularDishes() {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="popular-dishes margins mt5 mb7">

      <h2 style={{
        transform: isInView ? "scale(1)" : "scale(0.1)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
        className="popular-dishes__title section-title center">Most popular</h2>
      <p className="text-desc center mb4">See what our customers love the most.</p>
      <ul ref={ref}
        className="popular-dishes__grid grid">
        <li style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.85, 1) 0.5s"
        }}>
          <PopularDishItem
            menusection="Pasta Dishes"
            link="./menu#pastadishes"
            imgSource={dish3}
            dishTitle="Spaghetti Arrabbiata"
            dishDesc="Our tomato sauce with garlic, olive oil and chilli (optional)" />
        </li>
        <li style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.85, 1) 0.7s"
        }}
        >
          <PopularDishItem
            menusection="Pizzas"
            link="./menu#pizzas"
            imgSource={pizza}
            dishTitle="Pizza Piccante"
            dishDesc="Fiery combination: tomato sauce, mozzarella, Nduja and pepperoni chilli." />
        </li>
        <li style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.85, 1) 0.9s"
        }}>
          <PopularDishItem
            menusection="Starters"
            link="./menu#starters"
            imgSource={dish1}
            dishTitle="Spaghetti Gamberoni"
            dishDesc="King prawns sauteed with white wine, chilli, garlic, fresh basil and tomato sauce" />
        </li>
        <li style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.85, 1) 1.1s"
        }} >
          <PopularDishItem
            menusection="Main Courses"
            link="./menu#mains"
            imgSource={dish2}
            dishTitle="Fillet Steak"
            dishDesc="8oz+ hand cut fillet seasoned and cooked to your taste, served with chips and salad." />
        </li>
      </ul>
    </section >
  )
}