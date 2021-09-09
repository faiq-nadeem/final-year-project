import React from 'react'
import { Link } from "react-router-dom";
import Preloader from './preloader'
import Search from './search'

const Header = () => {
    return (
        <div>
            <Preloader />

            <div className="overlay"></div>
            <Link to="link.php" className="scrollToTop">
                <i className="fas fa-angle-up"></i>
            </Link>
            
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <ul className="menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Experts" style={{color:'yellow'}}>Live Experts</Link>
                            </li>
                            <li>
                                <Link to="/About">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li className="separator">
                                <span>|</span>
                            </li>
                            <li>
                                <div className="serch-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                            </li>
                            <li>
                                <div className="language-select">
                                    <select className="select-bar">
                                        <option value="">EN</option>
                                        <option value="">IN</option>
                                        <option value="">BN</option>
                                    </select>
                                </div>
                            </li>
                            
                            <li className="user-profile">
                                <Link to="/Login">
                                    Login / Sign Up
                                </Link>
                            </li>
                            {/* <li className="user-profile">
                                <Link to="link.php">
                                    <img src="assets/images/user-demo.png" alt="" />
                                </Link>
                                <ul className="submenu">
                                    <li>
                                        <Link to="link.php">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="link.php">Logout</Link>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>

            <Search />
        </div>
    )
}

export default Header
