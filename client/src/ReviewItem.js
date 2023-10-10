import React from 'react'

export default function ReviewItem({ key, reviewer, rating, avatar, review }) {


    return (
        <div key={key} className="reviews__grid--item shadow-dark">
            <div className="reviews__name-wrapper flex mb1">
                <div>
                    <h3 className="reviews__name">{reviewer}</h3>
                    <div className="reviews__rating">{rating}</div>
                </div>
                <img className="reviews__img shadow-dark" src={avatar} alt="Reviewer's avatar" />
            </div>
            <p className="reviews__text">{review}</p>
        </div>
    )
}
