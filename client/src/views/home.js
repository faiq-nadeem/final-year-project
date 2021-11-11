import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import moment from 'moment'

import { getBlogs } from '../actions/blogs'
import { getAdvisors } from '../actions/advisors'

const Home = () => {

    const dispatch = useDispatch()
    const blogs    = useSelector((state) => state.blogs)
    const advisors = useSelector((state) => state.advisors)
    
    useEffect(() => {
        dispatch(getBlogs())
        dispatch(getAdvisors())
    }, [dispatch])

    return (
        <div>
            <section className="banner-section">
                <img className="img1 wow fadeInLeft" src="assets/images/banner/aimg1.png" alt="" />
                <img className="img2 wow fadeInRight" src="assets/images/banner/aimg2.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <h1 className="main-title wow fadeInLeft">
                                Ask Expert Now
                            </h1>
                            <div className="join-now-box wow fadeInUp">
                                <div className="single-option age">
                                    <ul className="title">
                                        <li>
                                        Connect to Experts with proven field experience Get the Skills that you want from an Industry Proven Expert.
                                        </li>
                                        <li>
                                            Boost your productivity and skills with our learning environment
                                        </li>
                                    </ul>
                                </div>
                                <div className="joun-button pt-10">
                                    <button className="custom-button">Join Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="feature-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon01.png" alt="" />
                                </div>
                                <h4>
                                    100% Verified
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon02.png" alt="" />
                                </div>
                                <h4>
                                    Most Secure
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon03.png" alt="" />
                                </div>
                                <h4>
                                    100% Privacy
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon">
                                    <img src="assets/images/feature/icon04.png" alt="" />
                                </div>
                                <h4>
                                    Smart Learning
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="flirting-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title extra-padding wow fadeInUp">
                                        Meet new Experts Today!
                                    </h6>
                                    <h2 className="title extra-padding wow fadeInUp">
                                        Start Learning Now
                                    </h2>
                                    <p>
                                        In our modern day and age online learning apps have become an integral part of our lives. 
                                        We will allow you to have hands on live training with our Experts.
                                    </p>
                                    <br />
                                    <p>
                                        You can connect yourself with experts in variety of fields. You can find your field 
                                        and have hands on learning experience and career counseling with our Experts.
                                    </p>
                                </div>

                                <a href="link.php" className="custom-button">Start Learning</a>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="img">
                                <img className="bg-shape" src="assets/images/flirting/circle.png" alt="" />
                                <img src="assets/images/flirting/illutration.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="how-it-work-section">
                <img className="shape1" src="assets/images/h-it-w/circle-shape.png" alt="" />
                <img className="shape2" src="assets/images/h-it-w/bird.png" alt="" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title extra-padding wow fadeInUp">
                                        Start Your Learning Today!
                                    </h6>
                                    <h2 className="title wow fadeInUp">
                                        How Does It Work?
                                    </h2>
                                    <p className="text wow fadeInUp">
                                        You’re just 3 steps away from a great date
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-box wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                    <img src="assets/images/h-it-w/icon1.png" style={{width:'250px'}} alt="" />
                                    <div className="number">
                                        01
                                    </div>
                                </div>
                                <h4 className="title">
                                    Tell us about your field.
                                </h4>
                                <a href="link.php" className="custom-button">Join Now !</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-box wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src="assets/images/h-it-w/icon2.png" style={{width:'250px'}} alt="" />
                                    <div className="number">
                                        02
                                    </div>
                                </div>
                                <h4 className="title">
                                    Find the right Expert.
                                </h4>
                                <a href="link.php" className="custom-button">Join Now !</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-box wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon">
                                    <img src="assets/images/h-it-w/icon3.png" style={{width:'250px'}} alt="" />
                                    <div className="number">
                                        03
                                    </div>
                                </div>
                                <h4 className="title">
                                    Start Learning.
                                </h4>
                                <a href="link.php" className="custom-button">Join Now !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="statistics-section">
                <div className="container">
                    <div className="statistics-wrapper">
                        <div className="row mb--20">
                            <div className="col-md-4 col-sm-6">
                                <div className="stat-item wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="icon">
                                        <img src="assets/images/statistics/stat01.png" alt="" />
                                    </div>
                                    <div className="stat-content">
                                        <h3 className="counter-item"><span className=" odometer" data-odometer-final="350"></span>M</h3>
                                        <span className="info">Sessions Booked</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="stat-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src="assets/images/statistics/stat02.png" alt="" />
                                    </div>
                                    <div className="stat-content">
                                        <h3 className="counter-item"><span className=" odometer" data-odometer-final="447"></span>M</h3>
                                        <span className="info">Usefull Sessions</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="stat-item wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="icon">
                                        <img src="assets/images/statistics/stat03.png" alt="" />
                                    </div>
                                    <div className="stat-content">
                                        <h3 className="counter-item"><span className=" odometer" data-odometer-final="60"></span>M</h3>
                                        <span className="info">Talented Experts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="join-now-section">
                <img className="shape1" src="assets/images/join/heartshape.png" alt="" />
                {/* <img className="shape2" src="assets/images/join/img.png" alt="" /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header white-color">
                                    <h2 className="title wow fadeInUp">
                                        Best Ways to Find Your True 
                                        Passion and Skill
                                    </h2>
                                </div>

                                <a href="link.php" className="custom-button">Join Now !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="feature-section extra-feature">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title wow fadeInUp">
                                        An Exhaustive List Of
                                    </h6>
                                    <h2 className="title extra-padding wow fadeInUp">
                                        Amazing Features
                                    </h2>
                                    <p className="text">
                                        To find skills that will boost up your career.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content-area">
                    <div className="left-image">
                        <div className="offer">
                            <div className="offer-inner-content">
                                <span className="fs">START NOW FOR</span>
                                <h2>
                                    FREE
                                </h2>
                                <span className="ss">7 DAY TRIAL</span>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-5">
                                <div className="feature-lists">
                                    <div className="single-feature-list wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="icon">
                                            <img src="assets/images/feature/i1.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                Simple to use
                                            </h4>
                                            <p>
                                                Simple steps to start learning now!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-feature-list wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon">
                                            <img src="assets/images/feature/i2.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                Smart Learning
                                            </h4>
                                            <p>
                                                Simple steps to follow to have a matching
                                                connection.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-feature-list wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="icon">
                                            <img src="assets/images/feature/i3.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                Get Connected with the Advisor
                                            </h4>
                                            <p>
                                                Simple steps to follow to have a matching
                                                connection.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-feature-list wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="icon">
                                            <img src="assets/images/feature/i4.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                Responsive Community
                                            </h4>
                                            <p>
                                                Simple steps to follow to have a matching
                                                connection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="latest-registered-section">
                <img className="shape" src="assets/images/registered/shape.png" alt="" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="content">
                                <div className="section-header">
                                    <h6 className="sub-title extra-padding wow fadeInUp">
                                        Latest Registered
                                    </h6>
                                    <h2 className="title wow fadeInUp">
                                        Advisors
                                    </h2>
                                    <p className="text">
                                    If you have been looking for Career Boosting Skills, 
                                    then your search ends here
                                    </p>
                                </div>
                                <a href="link.php" className="custom-button"> See All !</a>
                            </div>
                        </div>
                        <div className="col-xl-6 align-self-center row justify-content-around">

                            { advisors.slice(0, 3).map((advisor) => (
                                <div className="single-slider">
                                    <div className="img">
                                        <img src={advisor.selectedFile} alt="" />
                                    </div>
                                    <div className="inner-content">
                                        <h4 className="name">
                                            {advisor.name}
                                        </h4>
                                        <p>
                                            {advisor.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                                
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
                                    <h6 className="sub-title wow fadeInUp">
                                        That is what learning is...
                                    </h6>
                                    <h2 className="title wow fadeInUp">
                                        OUR BLOGS
                                    </h2>
                                    <p className="text wow fadeInUp">
                                        Some of the positive News and guidelines from experts and learners all over the world
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        { blogs.slice(0, 3).map((blog) => (
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

export default Home