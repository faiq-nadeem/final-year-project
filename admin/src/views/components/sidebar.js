import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                <div className="sidenav-header d-flex align-items-center">
                    <Link className="navbar-brand" to="/">
                    <img src="assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                    </Link>
                    <div className="ml-auto">                  
                        <div className="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
                            <div className="sidenav-toggler-inner">
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="navbar-inner">
                    <nav className="sidenav navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
                        <div className="scrollbar-inner">
                            <div className="sidenav-header d-flex text-center card">
                                <Link className="navbar-brand" to="/">
                                    <h1 className="color-theme-1" style={{fontWeight: "bold"}}>ADMIN PANEL</h1>
                                </Link>
                            </div>
                            <div className="navbar-inner">
                                <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                            <i className="ni ni-key-25 text-primary"></i>
                                            <span className="sidenav-normal"> Dashboard </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Category" className="nav-link">
                                            <i className="ni ni-books text-primary"></i>
                                            <span className="sidenav-normal"> Categories </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/SubCategory" className="nav-link">
                                            <i className="ni ni-bullet-list-67 text-primary"></i>
                                            <span className="sidenav-normal"> Sub Categories </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Advisors" className="nav-link">
                                            <i className="ni ni-cart text-primary"></i>
                                            <span className="sidenav-normal"> Advisors </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Blog" className="nav-link">
                                            <i className="ni ni-single-copy-04 text-primary"></i>
                                            <span className="sidenav-normal"> Blogs </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Users" className="nav-link">
                                            <i className="ni ni-single-02 text-primary"></i>
                                            <span className="sidenav-normal"> Users </span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav">
                                        {/* <li className="nav-item">
                                            <Link to="contact.php" className="nav-link">
                                            <i className="ni ni-badge text-primary"></i>
                                            <span className="sidenav-normal"> Contact Details </span>
                                            </Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link to="/PaymentMethod" className="nav-link">
                                            <i className="ni ni-credit-card text-primary"></i>
                                            <span className="sidenav-normal"> Payment Methods </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
