import React from 'react'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

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
