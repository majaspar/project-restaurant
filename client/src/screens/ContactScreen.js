import React from 'react';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';

//Google Maps
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// const containerStyle = {
//     width: '100%',
//     height: '450px'
// };

// const center = {
//     lat: 51.45875859621607,
//     lng: -2.5847960486048995
// };


export default function ContactScreen() {

    // Set up Google maps
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    // })

    // if (!isLoaded) {
    //     return <div>Map not loaded.</div>
    // }

    return (
        <>
            <div className="header-and-hero ContactScreen">
                <Navbar />
                <PageTitle content="Contact Us" />
            </div>
            <div className="mt3 ContactScreen__wrapper ">
                <div className="ContactScreen__contact margins">
                    <h2 className="section-title center">Visit the restaurant, phone us, email...</h2>
                    <div className="ContactScreen__contact grid mb5">

                        <div className="ContactScreen__grid--item shadow center">
                            <i className="fa-solid fa-map-location-dot mb2"></i>
                            <p className="">CABOT CIRCUS<br />
                                Bond Street, Broadmead<br />
                                BRISTOL BS1 3BD</p>
                        </div>
                        <div className="ContactScreen__grid--item shadow center"><a href="tel:+447788990011">
                            <i className="fa-solid fa-phone mb2"></i>
                            <p> 0 7788 990 011</p></a>
                        </div>

                        <div className="ContactScreen__grid--item shadow center">
                            <a href="mailto:contact@lenaesposito.co.uk">
                                <i className="fa-solid fa-envelope mb2"></i>
                                <p> contact@italianrestaurant.co.uk</p></a>
                        </div>
                    </div>
                </div>
                <h2 className="section-title margins center">Here's where to find us:</h2>
                <div className="ContactScreen__map shadow"></div>

                <section className="margins mt7 mb7 ContactForm__wrapper">

                    <h2 className="section-title center">Contact Form</h2>
                    <form className="ContactForm flex-column" action="https://formsubmit.co/d11cca59037b3f7effa04f2dc67a109d" method="POST">
                        <div className="form__labelled-item">
                            <label className="form__label" htmlFor="name">Name: </label>
                            <input type="text" placeholder="Name" name="user_name" required />
                        </div>
                        <div className="form__labelled-item">
                            <label className="form__label" htmlFor="name">Email: </label>
                            <input type="email" placeholder="Email" name="user_email" required />
                        </div>
                        <div className="form__labelled-item">
                            <label className="form__label" htmlFor="name">Subject: </label>
                            <input type="text" placeholder="Subject" name="subject" required />
                        </div>
                        <div className="form__labelled-item">
                            <label className="form__label" htmlFor="name">Message: </label>
                            <textarea className="form__textarea" placeholder='How can we help you?' name="message" required />
                        </div>
                        <input type="hidden" name="_next" value="https://restaurant.lenaesposito.co.uk/#/thanks" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="Contact from Italian Restaurant" />
                        <button type="submit">Send Message</button>
                    </form>

                </section >
            </div>
        </>
    )
}

