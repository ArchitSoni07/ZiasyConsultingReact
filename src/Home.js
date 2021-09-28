import React from 'react'
import AboutHome from './components/Body/AboutHome'
import ContactHome from './components/Body/ContactHome'
import PortfolioHome from './components/Body/PortfolioHome'
import ServiceHome from './components/Body/ServiceHome'
import Header from './components/Header/Header'

function Home() {
    return (
        <div>
            <Header />
            <AboutHome />
            <ServiceHome />
            <PortfolioHome />
            <ContactHome />
        </div>
    )
}

export default Home
