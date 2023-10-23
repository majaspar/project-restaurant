import React from 'react'

export default function PageTitle({ content, description }) {


    return (
        <div className="margins hero grid PageTitle">

            <div className="hero__text mt3 mb3 flex-column">
                <h1 className="center">{content}</h1>
                {description}
            </div>

        </div>
    )
}
