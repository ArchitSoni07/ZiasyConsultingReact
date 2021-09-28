import React from 'react'
import Navbar from '../../Navbar'
import './about.css'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../Footer/Footer'
import AboutComponent from './AboutComponent'


function AboutHome() {
    return (
        <motion.div
            initial={{ opacity: 0 }, { y: "20%" }}
            animate={{ opacity: 1 }, { y: "0%" }}
            exit={{ opacity: 0 }, { y: "100%" }}>
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
                                    <AboutComponent name={"Web Development"} />
                                </li>
                                <li>
                                    <AboutComponent name={"UI / UX Design"} />
                                </li>
                                <li>
                                    <AboutComponent name={"ECommerce"} />
                                </li>
                                <li>
                                    <AboutComponent name={"Mobile App Development"} />
                                </li>
                                <li>
                                    <AboutComponent name={"SEO"} />
                                </li>
                                <li>
                                    <AboutComponent name={"Hardware Solutions"} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
        </motion.div>
    )
}

export default AboutHome
