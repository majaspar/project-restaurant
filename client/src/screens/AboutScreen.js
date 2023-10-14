import React from 'react'
import PageTitle from '../PageTitle'
import Navbar from '../Navbar'
import img1 from '../assets/photo-1502301103665-0b95cc738daf.jpg';
import img2 from '../assets/kamil-kalbarczyk-19Ft3QfakMo-unsplash.jpg'


export default function AboutScreen() {
    return (
        <>
            <div className="header-and-hero AboutScreen">
                <Navbar />
                <PageTitle content="About" />
            </div>
            <div className="AboutScreen__wrapper margins mt3 mb7">
                <h2 className="section-title mb2" style={{ textWrap: "balance" }}>Tradition is what defines us</h2>
                <figure>
                    <img className="AboutScreen__img" src={img1} alt="inside of the restaurant" />
                </figure>
                <h3 className="mb2 ff-kaushan">Simplicity</h3>
                <div>

                    <p className="text-desc justify mb2">One of the main characteristics of Italian cuisine is its simplicity, with many dishes made up of few ingredients, and therefore Italian cooks often rely on the quality of the ingredients, rather than the complexity of preparation.
                        The most popular dishes and recipes, over the centuries, have often been created by ordinary people more so than by chefs, which is why many Italian recipes are suitable for home and daily cooking, respecting regional specificities, privileging only raw materials and ingredients from the region of origin of the dish and preserving its seasonality.
                    </p>

                    <img className="AboutScreen__img1" src={img2} alt="inside of the restaurant" />
                    <h3 className="mt2 mb2 ff-kaushan">It's All About Ingredients</h3>
                    <p className="text-desc mb2 justify">
                        Cheese, cold cuts and wine are central to Italian cuisine, and along with pizza and coffee (especially espresso) form part of Italian gastronomic culture.

                        Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. In northern Italy, fish (such as cod, or baccalà), potatoes, rice, corn (maize), sausages, pork, and different types of cheese are the most common ingredients. Pasta dishes with tomato are common throughout Italy. Desserts have a long tradition of merging local flavours such as citrus fruits, pistachio and almonds with sweet cheeses like mascarpone and ricotta or exotic tastes as cocoa, vanilla and cinnamon.</p>
                    <a href='https://en.wikipedia.org/wiki/Italian_cuisine'>Source: Wikipedia</a>
                </div>
            </div>

        </>
    )
}

