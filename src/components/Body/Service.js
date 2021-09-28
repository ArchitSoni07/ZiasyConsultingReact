import React from 'react'
import Navbar from '../../Navbar'
import './Service.css'
import {AnimatePresence,motion} from 'framer-motion'
import Footer from '../Footer/Footer'
import ServiceComponent from './ServiceComponent'
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
                        <ServiceComponent 
                            img={"images/services-1.jpg"}
                            name={"Web Development"} 
                            desc={"Instinctive, creative and stunning user experience designed and developed, all at one place, review our work."}
                            />
                        </div>
                        <div class="col-md-4 services">
                        <ServiceComponent 
                            img={"images/services-2.jpg"}
                            name={"UI / UX Design"} 
                            desc={"We believe that the look of a website or mobile app is as important as it’s functioning. We provide the soul to every project with blueprints that reflect originality."}
                            />
                        </div>
                        
                        <div class="col-md-4 services">
                        <ServiceComponent 
                            img={"images/services-3.jpg"}
                            name={"ECommerce"} 
                            desc={"We Make your mark in the ecommerce space with our intricately designed product & cart optimization master plan."}
                            />
                        </div>

                        <div class="col-md-4 services">
                            <ServiceComponent
                            img ={"images/services-4.jpg"} 
                            name={"Search Engine Optimization"}
                            desc={"Climb to the top of Google rankings for your target keywords as our SEO experts build high-quality niche backlinks to your site."}
                                /> 
                        </div>

                        <div class="col-md-4 services">
                            <ServiceComponent
                            img ={"images/hardware.jpg"} 
                            name={"App Development"}
                            desc={"Cross platform, custom, out of the box & responsive apps with prosperous designs and secure backend."}
                                /> 
                        </div>

                        <div class="col-md-4 services">
                            <ServiceComponent
                            img ={"images/hardware.jpg"} 
                            name={"Hardware Solutions"}
                            desc={"PC components, smartphones, tablets, pre-built desktops, notebooks, Macs and enterprise/cloud computing technologies."}
                                /> 
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
