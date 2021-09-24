import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <img className="shape1" src="assets/images/footer/f-shape.png" alt="" />
                {/* <img className="shape2" src="assets/images/footer/flower01.png" alt="" /> */}
                <img className="shape3" src="assets/images/footer/right-shape.png" alt="" />
                <div className="newslater-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="newslater-container">
                                    <div className="newslater-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/footer/n-icon.png" alt="" />
                                        </div>
                                        <p className="text">Sign up to recieve a monthly email on the latest news!</p>
                                        <form className="newslater-form">
                                            <input type="text" placeholder="Your Email Address" />
                                            <button type="submit">
                                                <i className="fab fa-telegram-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-links">
                        <div className="row">
                            <div className="col-lg-12">
                                <hr className="hr" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="link-wrapper one">
                                    <h4 className="f-l-title">
                                        Our Information
                                    </h4>
                                    <ul className="f-solial-links">
                                        <li>
                                            <Link to="/">
                                                <i className="fas fa-angle-double-right"></i> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Community">
                                                <i className="fas fa-angle-double-right"></i> Our Community
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Categories">
                                                <i className="fas fa-angle-double-right"></i> Categories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/About">
                                                <i className="fas fa-angle-double-right"></i> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Contact">
                                                <i className="fas fa-angle-double-right"></i> Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="link-wrapper two">
                                    <h4 className="f-l-title">
                                        My Account
                                    </h4>
                                    <ul className="f-solial-links">
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i> Manage Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i> Safety Tips
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i> Account Varification
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i> Safety & Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i> Membership Level
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="link-wrapper three">
                                    <h4 className="f-l-title">
                                        help center
                                    </h4>
                                    <ul className="f-solial-links">
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i> Help centre
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i> FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i>Quick Start Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i>Tutorials
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="link.php">
                                                <i className="fas fa-angle-double-right"></i>Associate Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <hr className="hr2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="copyr-text">
                                    <span>
                                        Copyright © 2021.All Rights Reserved By -
                                    </span>
                                    <Link to="link.php"> FAIQ NADEEM</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
