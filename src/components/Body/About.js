import React from 'react'
import Navbar from '../../Navbar'
import './about.css'
import {AnimatePresence,motion} from 'framer-motion'
import Footer from '../Footer/Footer'


function About() {
    return (
        <motion.div
        initial={{ opacity: 0 }, { y: "20%" }}
        animate={{ opacity: 1 },{ y: "0%" }}
        exit={{ opacity: 0 },{y: "100%"}}>
            <Navbar />
            <section id="about-us">
                <div class="container">
                    <h1 class="title text-center">WHY CHOOSE US?</h1>
                    <div class="row">

                        <div class="col-md-6">
                            <img src="images/about.jpg" class="img-fluid" />
                        </div>
                        <div class="col-md-6 about-us">
                            <p class="about-title">About US</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <ul>
                                <li>
                                    <a href="#">Web Development</a>
                                </li>
                                <li>
                                    <a href="#">UI / UX Design</a>
                                </li>
                                <li>
                                    <a href="#"> ECommerce</a>
                                </li>
                                <li>
                                    <a href="#">Mobile App Development</a>
                                </li>
                                <li>
                                    <a href="#">SEO</a>
                                </li>
                                <li>
                                    <a href="#">Hardware Solutions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}

export default About
