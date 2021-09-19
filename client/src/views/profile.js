import {useDispatch, useSelector} from 'react-redux'
import React from 'react'
import { useLocation } from 'react-router'
import {Link} from 'react-router-dom'

import { getSingleUser } from '../actions/users'

const Profile = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const {userId} = location.state
    const users    = useSelector((state) => state.users)

    dispatch(getSingleUser(userId))

    return (
        <div>
            <section class="breadcrumb-area profile-bc-area">
        <div class="container">
            <div class="content">
                <h2 class="title extra-padding">
                    {users.name}
                </h2>
                <ul class="breadcrumb-list extra-padding">
                    <li>
                        <a href="index.html">
                            Home
                        </a>
                    </li>

                    <li>
                        {users.name}
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
                                    <img  src={users.selectedFile} style={{width:'inherit'}} alt="" />
                                    <div class="active-online"></div>
                                </div>
                                <h5 class="name">
                                    {users.name}
                                </h5>
                                <ul class="p-b-meta-one">
                                    <li>
                                        <span>21 Years Old</span>
                                    </li>
                                    <li>
                                        <span> <i class="fas fa-map-marker-alt"></i>Paris,France</span>
                                    </li>
                                </ul>
                                <div class="p-b-meta-two">
                                    <div class="left">
                                        <div class="icon">
                                            <i class="far fa-heart"></i>
                                        </div> 257
                                    </div>
                                    <div class="right">
                                        <Link to={{pathname:'/Stream', state:{advisorKey: users.userKey}}} class="custom-button">
                                            <i class="fab fa-cloudversify"></i> Live Chat Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-meta-box">
                            <ul class="p-m-b">
                                <li>
                                    <a href="/" data-toggle="modal" data-target="#usermessage">
                                        <i class="far fa-envelope"></i>
                                        <div class="number">04</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" data-toggle="modal" data-target="#usernotification">
                                        <i class="far fa-bell"></i>
                                        <div class="number">04</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i class="fas fa-cogs"></i>
                                    </a>
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
                                    <img src={users.selectedFile} alt="" />
                                    <div class="active-online"></div>
                                </div>
                                <h6 class="name">
                                    {users.name}
                                </h6>
                                <span class="is-varify">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="usewrname">
                                    @{users.name}
                                </span>
                                <span class="post-time">
                                    . 19h
                                </span>
                            </div>
                            <div class="p-s-p-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Nam vel porta felis.
                                </p>
                            </div>
                            <div class="p-s-p-content-footer">
                                <div class="left">
                                    <a href="/" class="comment">Comment</a>
                                    <a href="/" class="/"><i class="far fa-star"></i></a>
                                </div>
                                <div class="right">
                                    <a href="/" class="/"><i class="far fa-star"></i></a>
                                    <select class="nice-select select-bar">
                                        <option value="">ALL</option>
                                        <option value="">NEW</option>
                                        <option value="">OLD</option>
                                        <option value="">POPULAR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="profile-single-post">
                            <div class="p-s-p-header-area">
                                <div class="img">
                                    <img src={users.selectedFile} alt="" />
                                    <div class="active-online"></div>
                                </div>
                                <h6 class="name">
                                    {users.name}
                                </h6>
                                <span class="is-varify">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="usewrname">
                                    @{users.name}
                                </span>
                                <span class="post-time">
                                    . 19h
                                </span>
                            </div>
                            <div class="p-s-p-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Nam vel porta felis.
                                </p>
                                    <img src={users.selectedFile} alt="" />
                            </div>
                            <div class="p-s-p-content-footer">
                                <div class="left">
                                    <a href="/" class="comment">Comment</a>
                                    <a href="/" class="/"><i class="far fa-star"></i></a>
                                </div>
                                <div class="right">
                                    <a href="/" class="/"><i class="far fa-star"></i></a>
                                    <select class="nice-select select-bar">
                                        <option value="">ALL</option>
                                        <option value="">NEW</option>
                                        <option value="">OLD</option>
                                        <option value="">POPULAR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="profile-single-post">
                            <div class="p-s-p-header-area">
                                <div class="img">
                                    <img src={users.selectedFile} alt="" />
                                    <div class="active-online"></div>
                                </div>
                                <h6 class="name">
                                    {users.name}
                                </h6>
                                <span class="is-varify">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="usewrname">
                                    @{users.name}
                                </span>
                                <span class="post-time">
                                    . 19h
                                </span>
                            </div>
                            <div class="p-s-p-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Nam vel porta felis.
                                </p>
                            </div>
                            <div class="p-s-p-content-footer">
                                <div class="left">
                                    <a href="/" class="comment">Comment</a>
                                    <a href="/" class="/"><i class="far fa-star"></i></a>
                                </div>
                                <div class="right">
                                    <a href="/" class="/"><i class="far fa-star"></i></a>
                                    <select class="nice-select select-bar">
                                        <option value="">ALL</option>
                                        <option value="">NEW</option>
                                        <option value="">OLD</option>
                                        <option value="">POPULAR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <a href="/" class="load-more">Load More..</a>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-5 col-md-7">
                    <div class="profile-aside-area">
                        <div class="other-profile">
                            <div class="o-p-header">
                                <h6 class="title">
                                    You may like
                                </h6>
                            </div>
                            <div class="o-p-content">
                                <div class="p-u-p-list-slider owl-carousel">
                                    <div class="slider-item">
                                        <div class="p-u-p-list">
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img1.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img2.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img3.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img4.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img5.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img6.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img7.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img8.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slider-item">
                                        <div class="p-u-p-list">
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img1.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img2.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img3.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img4.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img5.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img6.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img7.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                            <div class="my-col">
                                                <div class="img">
                                                    <img src="assets/images/profile/op-img8.png" alt="" />
                                                    <a href="single-profile.html" class=""><i class="fas fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-request">
                            <div class="c-r-heading">
                                <h6 class="title">
                                    <i class="far fa-comments"></i> Chat Request
                                </h6>
                            </div>
                            <div class="c-r-content">
                                <div class="c-r-content-list">
                                    <div class="single-c-r">
                                        <div class="left">
                                            <img src="assets/images/profile/c-r-img1.png" alt="" />
                                            <div class="active-online"></div>
                                        </div>
                                        <div class="right">
                                            <h4 class="title">
                                                laura maria
                                            </h4>
                                            <p>
                                                true love is...
                                            </p>
                                        </div>
                                    </div>
                                    <div class="single-c-r">
                                        <div class="left">
                                            <img src="assets/images/profile/c-r-img2.png" alt="" />
                                            <div class="active-online"></div>
                                        </div>
                                        <div class="right">
                                            <h4 class="title">
                                                laura maria
                                            </h4>
                                            <p>
                                                true love is...
                                            </p>
                                        </div>
                                    </div>
                                    <div class="single-c-r">
                                        <div class="left">
                                            <img src="assets/images/profile/c-r-img3.png" alt="" />
                                            <div class="active-online"></div>
                                        </div>
                                        <div class="right">
                                            <h4 class="title">
                                                laura maria
                                            </h4>
                                            <p>
                                                true love is...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" class="load-more">
                                    load More
                                </a>
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

export default Profile
