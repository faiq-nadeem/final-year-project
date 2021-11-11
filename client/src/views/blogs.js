import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import moment from 'moment'

import { getBlogs } from '../actions/blogs'

const Blog = () => {

    const dispatch = useDispatch()
    const blogs    = useSelector((state) => state.blogs)
    
    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])

    return(
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                        Blog
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                Blog
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="blog-page single-blog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">

                            { blogs.map((blog) => (
                                <div className="col-lg-12">
                                    <div className="single-blog">
                                        <div className="img">
                                            <img src={blog.selectedFile} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="left">
                                                {/* <div className="avatar">
                                                    <img src="assets/images/blog/author-avarat.png" alt="" />
                                                </div> */}
                                                <ul className="meta-list">
                                                    <li>
                                                        <a href="link.php">
                                                            <i className="far fa-comments"></i>
                                                        </a>
                                                        <span>30</span>
                                                    </li>
                                                    <li>
                                                        <a href="link.php">
                                                            <i className="fas fa-share-alt"></i>
                                                        </a>
                                                        <span>22</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="right">
                                                <p className="date">
                                                    Published: {moment(blog.createdAt).fromNow()}
                                                </p>
                                                <h4 className="title">
                                                    {blog.title}
                                                </h4>
                                                <p className="text">
                                                    {blog.message}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="post-footer">
                                            {/* <div className="left">
                                                <p>
                                                    <button className="custom-button">Like</button>
                                                </p>
                                            </div>
                                            <div className="right">
                                                <a href="link.php" className="read-more-btn">Continue Reading</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget widget-search">
                                <h5 className="title">search</h5>
                                <form className="search-form">
                                    <input type="text" placeholder="Enter your Search Content" required />
                                    <button type="submit"><i className="flaticon-loupe"></i>Search</button>
                                </form>
                            </div>
                            <div className="widget widget-newsletter">
                                <h5 className="title">Newsletter</h5>
                                <form className="search-form">
                                    <input type="text" placeholder="Enter your Email Address" required />
                                    <button type="submit"><i className="far fa-envelope"></i> Send</button>
                                </form>
                            </div>
                            <div className="widget widget-tags">
                                <h5 className="title">featured tags</h5>
                                <ul>
                                    <li>
                                        <a href="link.php">creative</a>
                                    </li>
                                    <li>
                                        <a href="link.php">design</a>
                                    </li>
                                    <li>
                                        <a href="link.php">skill</a>
                                    </li>
                                    <li>
                                        <a href="link.php">template</a>
                                    </li>
                                    <li>
                                        <a href="link.php" className="active">landing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
