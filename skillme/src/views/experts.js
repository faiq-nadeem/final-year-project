import React from 'react'
import { Link } from "react-router-dom"

const Experts = () => {
    return (
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Experts
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                Experts
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="community-section inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-filter">
                                <div className="left">
                                    <Link to="/Category" data-toggle="modal" data-target="#exampleModalCenter">
                                        <i className="fas fa-sliders-h"></i>  Filter by categories
                                    </Link>
                                </div>
                                <div className="right">
                                    <span className="span">
                                        Order By : 
                                    </span>
                                    <div className="filter-right">
                                        <select className="nice-select select-bar">
                                            <option value="">Latest Active</option>
                                            <option value="">NEW</option>
                                            <option value="">OLD</option>
                                            <option value="">POPULAR</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-community-box">
                                <div className="img">
                                    <img src="assets/images/cummunity/img1.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <a href="community-single.html" className="title">
                                        Ali Behram
                                    </a>
                                    <p className="text">
                                        Graphic Designer
                                    </p>
                                </div>
                                <div className="box-footer">
                                    <div className="left">
                                        <i className="fas fa-globe-americas"></i> Live
                                    </div>
                                    <div className="right">
                                        <i className="fas fa-users"></i> 100
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-community-box">
                                <div className="img">
                                    <img src="assets/images/cummunity/img2.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <a href="community-single.html" className="title">
                                        Faiq Nadeem
                                    </a>
                                    <p className="text">
                                        English Expert
                                    </p>
                                </div>
                                <div className="box-footer">
                                    <div className="left">
                                        <i className="fas fa-globe-americas"></i> Live
                                    </div>
                                    <div className="right">
                                        <i className="fas fa-users"></i> 100
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-community-box">
                                <div className="img">
                                    <img src="assets/images/cummunity/img3.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <a href="community-single.html" className="title">
                                        Subhan Zahid
                                    </a>
                                    <p className="text">
                                        Hardware Expert
                                    </p>
                                </div>
                                <div className="box-footer">
                                    <div className="left">
                                        <i className="fas fa-globe-americas"></i> Live
                                    </div>
                                    <div className="right">
                                        <i className="fas fa-users"></i> 100
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-community-box">
                                <div className="img">
                                    <img src="assets/images/cummunity/img3.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <a href="community-single.html" className="title">
                                        Shirza Hashmi
                                    </a>
                                    <p className="text">
                                        Hardware Engineer
                                    </p>
                                </div>
                                <div className="box-footer">
                                    <div className="left">
                                        <i className="fas fa-globe-americas"></i> Live
                                    </div>
                                    <div className="right">
                                        <i className="fas fa-users"></i> 100
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-community-box">
                                <div className="img">
                                    <img src="assets/images/cummunity/img1.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <a href="community-single.html" className="title">
                                        Gulfam Tahir
                                    </a>
                                    <p className="text">
                                        Game Development
                                    </p>
                                </div>
                                <div className="box-footer">
                                    <div className="left">
                                        <i className="fas fa-globe-americas"></i> Live
                                    </div>
                                    <div className="right">
                                        <i className="fas fa-users"></i> 100
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-community-box">
                                <div className="img">
                                    <img src="assets/images/cummunity/img2.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <a href="community-single.html" className="title">
                                        Naukhaiz Chaudary
                                    </a>
                                    <p className="text">
                                        Language Translator
                                    </p>
                                </div>
                                <div className="box-footer">
                                    <div className="left">
                                        <i className="fas fa-globe-americas"></i> Live
                                    </div>
                                    <div className="right">
                                        <i className="fas fa-users"></i> 100
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experts
