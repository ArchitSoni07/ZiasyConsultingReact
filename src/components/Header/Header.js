import React from 'react'
import './Header.css'
import Navbar from '../../Navbar'
import {motion} from 'framer-motion'
function Header() {
    return (
        <motion.div
        initial={{ opacity: 0 }, { y: "20%" }}
        animate={{ opacity: 1 },{ y: "0%" }}
        exit={{ opacity: 0 },{y: "100%"}}
        >

            <Navbar />

            <section id="banner">
                <div class="container">
                    <div class="row text-center">
                        <div class="text-box">
                            <h1>Digital Products</h1>
                            <p>
                                We’re a team of experienced strategists, designers, and developers,working closely on
                                <br></br>
                                every stages of your product journey – from conception to delivery.
                            </p>
                            <a href="#footer" class="hero-btn">Visit us to know More</a>
                        </div>
                    </div>
                </div>
            </section>
            </motion.div>
        
    )
}

export default Header
