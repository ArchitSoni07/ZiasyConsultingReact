import React from 'react'
import Navbar from '../../Navbar'
import './Footer.css'
function Footer() {
    return (
        <div>
            <section id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-box">
                            <img src="images/logo.png" />
                            <p>
                                Ziasy Technology is a IT Company.We are providing perfect IT Business solutions to different technologies. As We are expertise in Web Development, Mobile Application Development, Software Development , Emerging Technologies and Testing , Hardware Solutions.
                            </p>
                        </div>
                        <div class="col-md-4 footer-box">
                            <p><b>CONTACT US</b></p>
                            <p><i class="fa fa-map-marker"></i> Savana Lane, North East Calgary, AB T3J 0X4</p>
                            <p><i class="fa fa-phone"></i> +1 8254378305</p>
                            <p><i class="fa fa-envelope-o"></i> ziasytechnology.ca@gmail.com</p>
                        </div>
                        <div class="col-md-4 footer-box">
                            <p><b>SUBSCRIBE NEWSLETTER</b></p>
                            <input type="email" class="form-control" placeholder="Your Email" />
                            <button type="button" class="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                    <hr />
                    <p class="copyright">
                        <a href="http://www.ziasyconsulting.com/"></a>
                        <a>&#169; Copyright 2021 Ziasy Consulting Pvt ltd</a>
                    </p>
            </div>
        </section>
        </div>
    )
}

export default Footer
