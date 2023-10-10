import React from 'react'
import Menu from '../Menu'
import Navbar from '../Navbar'
import PageTitle from '../PageTitle'

export default function MenuScreen() {
    return (
        <>
            <div className="header-and-hero MenuScreen">
                <Navbar />
                <PageTitle content="Menu" />
            </div>
            <Menu />
        </>

    )
}
