import img1 from './assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import img2 from './assets/pastaIcon.png';


export default function About() {
    return (
        <section className="about mb7">
            <div className="about__wrapper">
                <div className="about__img">
                    <img className="about__img--img" src={img1} alt="img" />
                </div>

                <div className="about__text--wrapper shadow-dark grid">
                    <div className="about__text shadow flex">
                        <h2 className="about__title section-title">Enter the World<br />of Delicious Food</h2>

                        <p className="text-desc">Italian cuisine includes deeply rooted traditions common to the whole country, as well as all the regional gastronomies, different from each other, especially between the north, the centre and the south of Italy, which are in continuous exchange. Many dishes that were once regional have proliferated with variations throughout the country. Italian cuisine offers an abundance of taste, and is one of the most popular and copied around the world.</p>
                        <img className="pastaIcon" src={img2} alt="pasta icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}