import React from 'react'
import Navbar from '../../Navbar'
import './Service.css'
import {AnimatePresence,motion} from 'framer-motion'
import Footer from '../Footer/Footer'
function Service() {
    return (
        <motion.div
        initial={{ opacity: 0 }, { y: "20%" }}
        animate={{ opacity: 1 },{ y: "0%" }}
        exit={{ opacity: 0 },{y: "100%"}}
        >
            <Navbar />
            <section id="services">
                <div class="container text-center">
                    <h1 class="title">OUR SERVICES</h1>
                    <div class="row text-center">
                        <div class="col-md-4 services">
                            <img src="../../images/services-1.jpg" class="service-img" />
                            <h4>Web Development</h4>
                            <p>
                                Instinctive, creative and stunning user experience designed and developed, all at one place, review our work.
                            </p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="images/services-2.jpg" class="service-img" />
                            <h4>UI / UX Design</h4>
                            <p>
                                We believe that the look of a website or mobile app is as important as it’s functioning. We provide the soul to every project with blueprints that reflect originality.
                            </p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="images/services-3.jpg" class="service-img" />
                            <h4>ECommerce</h4>
                            <p>
                                We Make your mark in the ecommerce space with our intricately designed product & cart optimization master plan.
                            </p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="images/services-4.jpg" class="service-img" />
                            <h4>Search Engine Optimization</h4>
                            <p>
                                Climb to the top of Google rankings for your target keywords as our SEO experts build high-quality niche backlinks to your site.
                            </p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="images/services-1.jpg" class="service-img" />
                            <h4>Mobile App Development</h4>
                            <p>
                                Cross platform, custom, out of the box & responsive apps with prosperous designs and secure backend.
                            </p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="images/hardware.jpg" class="service-img" />
                            <h4>Hardware Solutions</h4>
                            <p>
                                PC components, smartphones, tablets, pre-built desktops, notebooks, Macs and enterprise/cloud computing technologies.
                            </p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">All Services</button>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}

export default Service
