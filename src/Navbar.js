import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {AnimatePresence,motion} from 'framer-motion'
function Navbar() {
    return (
        
        <motion.div
        initial={{ opacity: 0 }, { y: "20%" }}
        animate={{ opacity: 1 },{ y: "0%" }}
        exit={{ opacity: 0 },{y: "100%"}}
        >
            <section id="nav-bar">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link to='/'>
                    <a class="navbar-brand" href="#"><img src="images/logo.png"></img></a>
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <i class="fa fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <motion.div
                            initial={{ opacity: 0 }, { y: "20%" }}
                            animate={{ opacity: 1 },{ y: "0%" }}
                            exit={{ opacity: 0 },{y: "100%"}}
                            >
                            <Link to='/Header'>

                                <li class="nav-item">
                                    <a class="nav-link" href="#Home">HOME</a>
                                </li>
                            </Link>
                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0 }, { y: "20%" }}
                            animate={{ opacity: 1 },{ y: "0%" }}
                            exit={{ opacity: 0 },{y: "100%"}}
                            >           
                            <Link to='/About'>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about-us">ABOUT US</a>
                                </li>
                            </Link>   
                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0 }, { y: "20%" }}
                            animate={{ opacity: 1 },{ y: "0%" }}
                            exit={{ opacity: 0 },{y: "100%"}}
                            >
                            <Link to='/Service'>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">SERVICES</a>
                                </li>
                            </Link>
                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0 }, { y: "20%" }}
                            animate={{ opacity: 1 },{ y: "0%" }}
                            exit={{ opacity: 0 },{y: "100%"}}
                            >
                            <Link to='/Portfolio'>
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio">PORTFOLIO</a>
                                </li>
                            </Link>
                            </motion.div>

                            <motion.div
                            initial={{ opacity: 0 }, { y: "20%" }}
                            animate={{ opacity: 1 },{ y: "0%" }}
                            exit={{ opacity: 0 },{y: "100%"}}
                            >
                            <li class="nav-item">
                                <a class="nav-link" href="#carrer">CAREERS</a>
                            </li>
                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0 }, { y: "20%" }}
                            animate={{ opacity: 1 },{ y: "0%" }}
                            exit={{ opacity: 0 },{y: "100%"}}
                            >
                            <Link to='/Contact'>
                                <li class="nav-item">
                                    <a class="nav-link" href="#footer">CONTACT</a>
                                </li>
                            </Link>
                            </motion.div>
                        </ul>
                    </div>

                </nav>
            </section>

            </motion.div>
        
    )
}

export default Navbar
