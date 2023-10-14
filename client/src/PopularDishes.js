import PopularDishItem from './PopularDishItem'

import dish3 from './assets/carissa-gan-KSXvrqKUxnc-unsplash1.jpg'
import pizza from './assets/photo-1594007654729-407eedc4be65.jpg'
import dish1 from './assets/danijela-prijovic-qits91IZv1o-unsplash1.jpg'
import dish2 from './assets/01.jpg'


export default function PopularDishes() {
  return (
    <section className="popular-dishes margins mt5 mb7">

      <h2 className="popular-dishes__title section-title center">Most popular</h2>
      <p className="text-desc center mb4">See what our customers love the most.</p>
      <div className="popular-dishes__grid grid">
        <PopularDishItem
          menusection="Pasta Dishes"
          link="./menu#pastadishes"
          imgSource={dish3}
          dishTitle="Spaghetti Arrabbiata"
          dishDesc="Our tomato sauce with garlic, olive oil and chilli (optional)" />
        <PopularDishItem
          menusection="Pizzas"
          link="./menu#pizzas"
          imgSource={pizza}
          dishTitle="Pizza Piccante"
          dishDesc="Fiery combination: tomato sauce, mozzarella, Nduja and pepperoni chilli." />
        <PopularDishItem
          menusection="Starters"
          link="./menu#starters"
          imgSource={dish1}
          dishTitle="Spaghetti Gamberoni"
          dishDesc="King prawns sauteed with white wine, chilli, garlic, fresh basil and tomato sauce" />
        <PopularDishItem
          menusection="Main Courses"
          link="./menu#mains"
          imgSource={dish2}
          dishTitle="Fillet Steak"
          dishDesc="8oz+ hand cut fillet seasoned and cooked to your taste, served with chips and salad." />

      </div>
    </section>
  )
}