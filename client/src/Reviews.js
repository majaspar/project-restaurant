import ReviewItem from './ReviewItem';
import Star from './Star'

import { useSelector } from "react-redux";
import placeholder from './assets/testimonial-photo.jpg';
import placeholder2 from './assets/photo-1580489944761-15a19d654956.jpg';
import placeholder3 from './assets/photo-1549351512-c5e12b11e283.jpg';
import vector1 from './assets/vector1.svg';

export default function Reviews() {

  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;
  const star1 = <Star />
  const star2 = [<Star />, <Star />]
  const star3 = [<Star />, <Star />, <Star />]
  const star4 = [<Star />, <Star />, <Star />, <Star />]
  const star5 = [<Star />, <Star />, <Star />, <Star />, <Star />]
  return (
    <section className="reviews margins mb7">
      <h2 className="section-title center mb5">Read Our Reviews</h2>
      <img className="Reviews__vector-1" src={vector1} alt="S-shaped line for decorating background" />
      <div className="reviews__grid grid">

        <ReviewItem reviewer="Nikki Chapman" rating={star4} avatar={placeholder} review="These guys are great! I had an amazing pizza last time I was there. All products top quality. It's a bit far from the city centre, though..." />

        <ReviewItem reviewer="Alice Whittman" rating={star5} avatar={placeholder2} review="The best carbonarra I've ever had! 5/5 stars. Honestly, guys, there's no better place for Italian cuisine than this restaurant!" />

        <ReviewItem reviewer="Veronica Smith" rating={star5} avatar={placeholder3} review="Amazing place! Everything I tasted was delicious. The chef made my favourite customized pizza with all the best toppings! Yum!" />

      </div>

      {!currentUser && <h2 className="section-title center mt7 mb3">Would You Like to Leave a Review? &rarr; <a href="/login">Log In</a></h2>}
    </section>

  )
}