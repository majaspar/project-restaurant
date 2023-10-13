import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function PopularDishItem({ imgSource, dishTitle, dishDesc, menusection, link }) {
    return (
        <div className="popular-dishes__grid--item flex-column shadow">
            {/* Image */}

            <div className="popular-dishes__img--wrapper">
                <img className="popular-dishes__img" src={imgSource} alt="" />
            </div>



            {/* Text */}

            <div className="popular-dishes__text--wrapper">
                <div className="popular-dishes__text">
                    <h3 className="popular-dishes__name mb1 center ff-kaushan">{dishTitle}</h3>
                    <div className="popular-dishes__description text-desc center mb2">{dishDesc}</div>




                    {/* Button */}

                    <Link smooth to={link}><button className="popular-dishes__btn btn-action mt1">See all {menusection}</button></Link>
                </div>

            </div>
        </div>
    )
}
