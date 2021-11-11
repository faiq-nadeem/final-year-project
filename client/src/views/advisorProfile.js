import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import {Link} from 'react-router-dom'

import { getSingleAdvisor } from '../actions/advisors'

const AdvisorProfile = () => {
    const dispatch       = useDispatch()
    const location       = useLocation()
    const {advisorId}    = location.state
    const advisorProfile = useSelector((state) => state.advisorProfile)

    useEffect(() => {
        dispatch(getSingleAdvisor(advisorId))
    }, [dispatch, advisorId])

    return (
        <div>
            <section class="breadcrumb-area profile-bc-area">
                <div class="container">
                    <div class="content">
                        <h2 class="title extra-padding">
                            {advisorProfile.name}
                        </h2>
                        <ul class="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                {advisorProfile.name}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="profile-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-5 col-md-7">
                            <div class="left-profile-area">
                                <div class="profile-about-box">
                                    <div class="top-bg"></div>
                                    <div class="p-inner-content">
                                        <div class="profile-img">
                                            <img  src={advisorProfile.selectedFile} style={{width:'inherit'}} alt="" />
                                            <div class="active-online"></div>
                                        </div>
                                        <h5 class="name">
                                            {advisorProfile.name}
                                        </h5>
                                        <ul class="p-b-meta-one">
                                            <li>
                                                <span>21 Years Old</span>
                                            </li>
                                            <li>
                                                <span> <i class="fas fa-map-marker-alt"></i>Paris,France</span>
                                            </li>
                                        </ul>
                                        
                                        <Link to={{pathname:'/Stream', state:{advisorKey: advisorProfile.userKey}}} class="custom-button">
                                            <i class="fab fa-cloudversify"></i> Live Chat Now
                                        </Link>
                                    </div>
                                </div>
                                <div class="profile-meta-box">
                                    <ul class="p-m-b">
                                        <li>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="profile-uplodate-photo">
                                    <h4 class="p-u-p-header">
                                        <i class="fas fa-camera"></i> 21 Upload Photos 
                                    </h4>
                                    <div class="p-u-p-list">
                                        <div class="my-col">
                                            <div class="img">
                                                <img src="assets/images/profile/up1.jpg" alt="" />
                                                <div class="overlay">
                                                    <a href="assets/images/profile/up1.jpg" class="img-popup"><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-col">
                                            <div class="img">
                                                <img src="assets/images/profile/up2.jpg" alt="" />
                                                <div class="overlay">
                                                    <a href="assets/images/profile/up2.jpg" class="img-popup"><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-col">
                                            <div class="img">
                                                <img src="assets/images/profile/up3.jpg" alt="" />
                                                <div class="overlay">
                                                    <a href="assets/images/profile/up3.jpg" class="img-popup"><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-col">
                                            <div class="img">
                                                <img src="assets/images/profile/up4.jpg" alt="" />
                                                <div class="overlay">
                                                    <a href="assets/images/profile/up4.jpg" class="img-popup"><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-col">
                                            <div class="img">
                                                <img src="assets/images/profile/up5.jpg" alt="" />
                                                <div class="overlay">
                                                    <a href="assets/images/profile/up5.jpg" class="img-popup"><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="my-col">
                                            <div class="img">
                                                <img src="assets/images/profile/up6.jpg" alt="" />
                                                <div class="overlay">
                                                    <a href="assets/images/profile/up6.jpg" class="img-popup"><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6">
                            <div class="profile-main-content">
                                <div class="profile-single-post">
                                    <div class="p-s-p-header-area">
                                        <div class="img">
                                            <img src={advisorProfile.selectedFile} alt="" />
                                            <div class="active-online"></div>
                                        </div>
                                        <h6 class="name">
                                            {advisorProfile.name}
                                        </h6>
                                        <span class="is-varify">
                                            <i class="fas fa-check"></i>
                                        </span>
                                        <span class="usewrname">
                                            @{advisorProfile.name}
                                        </span>
                                        <span class="post-time">
                                            . 19h
                                        </span>
                                    </div>
                                    <div class="p-s-p-content">
                                        <img src={advisorProfile.selectedFile} alt="" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit. Nam vel porta felis.
                                        </p>
                                    </div>
                                    <div class="p-s-p-content-footer">
                                        <div class="left">
                                            <a href="/" class="comment">Like</a>
                                            <a href="/" class="/">1</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" class="load-more">Load More..</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdvisorProfile
