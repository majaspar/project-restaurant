import React from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';

export default function ThanksScreen() {
    return (
        <>
            <div className="header-and-hero ThanksScreen">
                <Navbar />
                <PageTitle content="Thank you" />
            </div>
            <div className="margins mt7 mb7">
                <h2>Thank you for submitting the contact form. We will get back to you shortly.</h2>
                <br />
                <a href="/contact"><div className="mt3">&larr; Go back</div></a>
            </div>
        </>
    )
}
