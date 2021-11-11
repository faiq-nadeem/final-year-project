import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { getBlogs, likeBlog } from '../actions/blogs'

const Blog = () => {

    const dispatch  = useDispatch()
    const blogs     = useSelector((state) => state.blogs)
    const localUser = useState(JSON.parse(localStorage.getItem('profile')))
    
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
                            { blogs.map((blog) => (
                                <div className="col-lg-4">
                                    <div className="col-lg-12">
                                        <div className="single-blog">
                                            <div className="img">
                                                <img src={blog.selectedFile} alt="" />
                                            </div>
                                            <div className="content">
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
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
