import React from 'react'
import Navbar from '../../Navbar'
import './contact.css'
import {AnimatePresence,motion} from 'framer-motion'
import Footer from '../Footer/Footer'

function Contact() {
    return (
        <motion.div
        initial={{ opacity: 0 }, { y: "20%" }}
        animate={{ opacity: 1 },{ y: "0%" }}
        exit={{ opacity: 0 },{y: "100%"}}>
            <Navbar />
            <section id="contact">
                <div class="container text-center">
                    <h1 class="title">CONTACT</h1>
                    <div class="row ">
                        <div class="col-md-6" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.621728745714!2d-113.9709566842437!3d51.13388507957543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537163ed00e931d9%3A0x4cef0fe8d1179b91!2sSavanna%20Ln%20NE%2C%20Calgary%2C%20AB%20T3J%204E4%2C%20Canada!5e0!3m2!1sen!2sin!4v1629832023473!5m2!1sen!2sin" width="550" height="350" style={{border:`10px`}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div class="col-md-6">
                            <form action="https://script.google.com/macros/s/AKfycbz86fcKpV31vW5Gb4eK3BUVV3YuwXe1V6BA_2zvLpWWWWXqlJRba_Bt/exec"
                                method="post" class="gform php-email-form aos-init aos-animate" data-aos="fade-up">
                                <div class="form-row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div class ="validate"></div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class ="validate"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div class ="validate"></div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div class="validate"></div>
                                </div>
                                <div class="mb-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit" class="hero-btn">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Social Media section -->*/}
            <section id="social-media">
                <div class="container text-center">
                    <p>FIND US ON SOCIAL MEDIA</p>
                    <div class="social-icons">
                        <a href="#"><img src="images/facebook-icon.png" /></a>
                        <a href="#"><img src="images/instagram-icon.png" /></a>
                        <a href="#"><img src="images/twitter-icon.png" /></a>
                        <a href="#"><img src="images/whatsapp-icon.png" /></a>
                        <a href="#"><img src="images/linkedin-icon.png" /></a>
                        <a href="#"><img src="images/snapchat-icon.png" /></a>
                    </div>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}

export default Contact
