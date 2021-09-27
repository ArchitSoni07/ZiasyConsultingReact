import React from 'react'
import About from './About'
import './Body.css'
import Service from './Service'
import Portfolio from './Portfolio'
import Contact from './Contact'


function Body() {
    return (
        <div>
            <About />
            {/*<!-- services Section -->*/}
            <Service />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Body
