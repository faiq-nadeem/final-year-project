import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import moment from 'moment'

import { getBlogs } from '../actions/blogs'

const About = () => {

    const dispatch = useDispatch()
    const blogs    = useSelector((state) => state.blogs)
    
    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])

    return (
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title">about us</h2>
                        <ul className="breadcrumb-list">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                about us
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="flirting-section about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="img">
                                <img src="assets/images/banner/aimg1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title">
                                        Get to Know More
                                    </h6>
                                    <h2 className="title">
                                        About us
                                    </h2>
                                    <p>
                                        Ask Expert Now is an online learning platform with thousands of creative courses and classes taught by experts to help you learn new skills. We are an easy-breezy skill exchange platform. Those traditional learning methods are outdated. Kool Stories is here to bring about a revolution 
                                    </p>
                                    <br />
                                    <p className="mb-0">
                                        Skill sharing platform can help to create a community of people with very sector-specific skills. So the users of your platform can ask for any expert regarding to required field.
                                        customers should consider contacting them via their website. We realize that it’s not a simple task to understand what options you have when it comes to contact with their help desk. We, 
                                        therefore, find it helpful if we share some of our research work with you.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-c-u-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title">
                                        How We’re different
                                    </h6>
                                    <h2 className="title extra-padding">
                                        Why Choose Us?
                                    </h2>
                                    <p className="text">
                                        There are lots of online course sites available which makes it difficult
                                        to choose the one which can give you right knowledge.... 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-w-c-u-box">
                                <div className="icon">
                                    <img src="assets/images/h-it-w/icon1.png" style={{width: '129px'}} alt="" />
                                </div>
                                <h4 className="title">
                                    Choose Field
                                </h4>
                                <p>
                                    Field - Tell us about your field of work and get an expert.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-w-c-u-box">
                                <div className="icon">
                                    <img src="assets/images/e-c-u/icon2.png" style={{width: '129px'}} alt="" />
                                </div>
                                <h4 className="title">
                                    Great Advices
                                </h4>
                                <p>
                                    Advices - Get Advices from the best and knowledged people.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-w-c-u-box">
                                <div className="icon">
                                    <img src="assets/images/h-it-w/icon2.png" style={{width: '129px'}} alt="" />
                                </div>
                                <h4 className="title">
                                    24/7Support
                                </h4>
                                <p>
                                    Support - Support from a ommuntiy that works 24/7 just for you.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-w-c-u-box">
                                <div className="icon">
                                    <img src="assets/images/h-it-w/icon3.png" style={{width: '129px'}} alt="" />
                                </div>
                                <h4 className="title">
                                    Invent Ideas
                                </h4>
                                <p>
                                    Solve Problems - Don't waste time get quicker responses and take next step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="sucess-stories-section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="section-header">
                                <h2 className="title">
                                    Have a look at our blogs
                                </h2>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        
                        { blogs.map((blog) => (
                                <div className="col-lg-4 col-md-6 pt-4">
                                    <div className="single-story-box wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="img">
                                            <img src={blog.selectedFile} alt="" />
                                        </div>
                                        <div className="content">
                                            {/* <div className="author">
                                                <img src="assets/images/sucess/p1.png" alt="" />
                                                <span></span>
                                            </div> */}
                                            <h4 className="title">
                                                {blog.title}
                                            </h4>
                                            <p>
                                                {blog.message}
                                            </p>
                                            <p className="date">
                                                {moment(blog.createdAt).fromNow()}
                                            </p>
                                        </div>
                                        <div className="box-footer">
                                            {/* <div className="left">
                                                <ul className="box-social-links">
                                                    <li>
                                                        <a href="link.php">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="link.php">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="link.php">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                            {/* <div className="right">
                                                <a href="link.php">
                                                    Read More<i className="fas fa-arrow-right"></i>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
