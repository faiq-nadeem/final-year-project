import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import {Link} from 'react-router-dom'
import moment from 'moment'

import { getBlogs, likeBlog } from '../actions/blogs'

import { getSingleAdvisor } from '../actions/advisors'

const AdvisorProfile = () => {
    const dispatch       = useDispatch()
    const location       = useLocation()
    const {advisorId}    = location.state
    const advisorProfile = useSelector((state) => state.advisorProfile)
    const blogs          = useSelector((state) => state.blogs)
    const localUser      = useState(JSON.parse(localStorage.getItem('profile')))

    const [advisorRating, setAdvisorsRating] = useState({
        review: '',
    })

    useEffect(() => {
        dispatch(getSingleAdvisor(advisorId))
        dispatch(getBlogs())
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
                        <div class="col-lg-12">
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
                                <div class="profile-meta-box">
                                    <textarea placeholder="Please Rate The Advisors And Enter Reviews Here..."  onChange = {(e) => setAdvisorsRating({...advisorRating, review: e.target.value})}></textarea>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="profile-main-content row">
                                
                                { blogs.map((blog) => (
                                    blog.creator === advisorProfile._id && (
                                        <div class="profile-single-post col-lg-4">
                                            <div class="p-s-p-header-area">
                                                <div class="img">
                                                    <img src={advisorProfile.selectedFile} alt="" />
                                                    <div class="active-online"></div>
                                                </div>
                                                <h6 class="name">
                                                    {blog.title}
                                                </h6>
                                                <span class="post-time">
                                                    . {moment(blog.createdAt).fromNow()}
                                                </span>
                                            </div>
                                            <div class="p-s-p-content">
                                                <img src={blog.selectedFile} alt="" />
                                                <p>
                                                    {blog.message}
                                                </p>
                                            </div>
                                            <div class="p-s-p-content-footer">
                                                <button onClick={() => dispatch(likeBlog(blog._id))}>
                                                    {                                                        
                                                        (blog.likes.length > 0) ? (
                                                            blog.likes.find((like) => like === (localUser?.result?.googleId || localUser?.result?._id))
                                                            ? (
                                                                <div>{blog.likes.length > 2 ? `You and ${blog.likes.length - 1} others` : `${blog.likes.length} ${blog.likes.length > 1 ? 's' : ''}`}</div>
                                                            ) : (
                                                                <div><i className="fas fa-thumbs-up">{blog.likes.length}</i>{blog.likes.length === 1 ? 'Like' : 'Likes'}</div>
                                                            )
                                                        ) : (
                                                            <div><i className="fas fa-thumbs-up"></i></div>
                                                        )
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    )
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdvisorProfile
