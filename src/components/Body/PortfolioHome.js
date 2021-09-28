import React from 'react'
import Navbar from '../../Navbar'
import './Portfolio.css'
import {AnimatePresence,motion} from 'framer-motion'
import Footer from '../Footer/Footer'
import PortfolioComponent from './PortfolioComponent'

function PortfolioHome() {
    return (
        <motion.div
        initial={{ opacity: 0 }, { y: "20%" }}
        animate={{ opacity: 1 },{ y: "0%" }}
        exit={{ opacity: 0 },{y: "100%"}}
        >
            {/*<!-- Portfolio -->*/}
            
            <section id="portfolio">
                <div class="container">
                    <h1 class="title text-center">PORTFOLIO</h1>
                    <div class="row contents">

                        <PortfolioComponent 
                        img={"images/sabrent.png"}
                        descTitle={"Sab Rent Karo"}
                        desc={"SabRentKaro is one of the pioneer Market Place IT companies in India that offers an end-to-end platform to both list and rent products with a built-in e-commerce facility.In a short span of time, SabRentKaro has attracted the attention of customers and corporates looking for options not only to fulfill short-term needs but also save money and time."}
                        descFooter={"From air conditioners to furniture, cars to luxury bikes, fitness equipment to televisions."}
                        websiteLink={"https://www.sabrentkaro.com/"}
                        />

                    </div>
                    
                    <div class="row content">

                    <PortfolioComponent 
                        img={"images/mother.png"}
                        descTitle={"Mother Works"}
                        desc={"Mother-Works has created a platform with a mission to help moms find flexible, remote jobs tailored to their schedule that allows for work/life balance.Our goal is for moms to continue their career goals while also fulfilling their dream to be the best parent they can be."}
                        descFooter={"Recognizing many additional skills moms learn and hone through the motherhood journey, we work to create an experience that enhances her life by giving her easy access to quality,flexible jobs so she doesn’t have to choose work or family."}
                        websiteLink={"https://mother-works.com/"}
                        />
                    </div>
                </div>
            </section>
            
        </motion.div>
    )
}

export default PortfolioHome
