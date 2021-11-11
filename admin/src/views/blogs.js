import {useDispatch, useSelector} from 'react-redux'
import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import moment from 'moment'

import { getBlogs, createBlog, updateBlog, deleteBlog, likeBlog, changeBlogStatus } from '../actions/blogs'

const Blogs = () => {

    const [currentId, setCurrentId] = useState(null)
    const dispatch                  = useDispatch()
    const user                      = JSON.parse(localStorage.getItem('profile'))
    const blogs                     = useSelector((state) => state.blogs)
    const editBlog                  = useSelector((state) => currentId ? state.blogs.find((e) => e._id === currentId) : null)

    const [blogData, setBlogData] = useState({
        title       : '',
        message     : '',
        tags        : '',
        blogStatus  : 'active',
        selectedFile: ''
    })


    useEffect(() => {
        dispatch(getBlogs())
    },[dispatch])

    useEffect(() => {
        if(editBlog) setBlogData(editBlog)
    }, [editBlog])
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId){
            dispatch(updateBlog(currentId, {...blogData, name: user?.result?.name}))
        } else {
            dispatch(createBlog({...blogData, name: user?.result?.name}))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setBlogData({
            title       : '',
            message     : '',
            tags        : '',
            selectedFile: ''
        })
    }

    if(!user?.result?.name) {
        return(
            <div>
                Please Sign In To continue
            </div>
        )
    }

    return(
        !blogs.length === 0 ? <div>There are no Blogs</div> : (
                
            <div>
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="dashboard.php"><i className="fas fa-home"></i></a></li>
                                            <li className="breadcrumb-item"><a href="blogs.php">Blogs = {blogs.length}</a></li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new">Add New Blog</button>
                                    <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                        <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-default">{currentId ? 'EDIT THIS ' : 'CREATE A NEW '} BLOG</h6>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="card-body px-lg-5 py-lg-5 text-center">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className = "form-control" placeholder = "Title" type = "text" name = "title" value = {blogData.title} onChange = {(e) => setBlogData({...blogData, title: e.target.value})} />
                                                                </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <textarea className = "form-control" type = "text" name = "message" value = {blogData.message} onChange = {(e) => setBlogData({...blogData, message: e.target.value})} >Enter description...</textarea>
                                                              </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className = "form-control" type = "text" name = "tags" value = {blogData.tags} onChange = {(e) => setBlogData({...blogData, tags: e.target.value.split(',')})} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <FileBase
                                                                type="file"
                                                                multiple={false}
                                                                onDone={({base64}) => setBlogData({...blogData, selectedFile:base64})}
                                                            />
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="submit" className="btn btn-secondary">Submit</button>
                                                            <button type="button" className="btn btn-warning" onClick={clear}>Clear</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid mt--6">
                    <div className="row">
                        { blogs.map((blog) => (
                            <div className="col-lg-4" key={blog._id}>
                                <div className="card">
                                    <div style={{background: `url(${blog.selectedFile})`, height:'250px', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                                    <div className="card-body">
                                        <h5 className="h2 card-title mb-0">{blog.title}</h5>
                                        <h5 className="h2 card-title mb-0">{blog.name}</h5>
                                        <small className="text-muted">Published on :{blog.createdAt} {moment(blog.createdAt).fromNow()}</small>
                                        <p className="card-text mt-4">{blog.message}</p>
                                        <p className="card-text mt-4">{blog.tags ? blog.tags.map((tag) => `#${tag} `) : 'No Tags'}</p>
                                        
                                        {
                                            user?.result?.userRole === 'admin' && (
                                                blog.blogStatus === 'active' ? (
                                                    <button type="button" className="btn btn-secondary mr-0" onClick={() => dispatch(changeBlogStatus(blog._id))}><i className="fa fa-eye"></i></button>
                                                ) : (
                                                    <button type="button" className="btn btn-warning mr-0"  onClick={() => dispatch(changeBlogStatus(blog._id))}><i className="fa fa-eye-slash"></i></button>
                                                )
                                            )   
                                        }

                                        {/* <button className="btn btn-link px-0" disabled={!user?.result} onClick={() => dispatch(likeBlog(blog._id))}> */}
                                        <button className="btn btn-link px-0" onClick={() => dispatch(likeBlog(blog._id))}>
                                            {                                                        
                                                (blog.likes.length > 0) ? (
                                                    blog.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                                                    ? (
                                                        <div>{blog.likes.length > 2 ? `You and ${blog.likes.length - 1} others` : `${blog.likes.length} like${blog.likes.length > 1 ? 's' : ''}`}</div>
                                                    ) : (
                                                        <div>{blog.likes.length} {blog.likes.length === 1 ? 'Like' : 'Likes'}</div>
                                                    )
                                                ) : (
                                                    <div>Like</div>
                                                )
                                            }
                                        </button>
                                        {(user?.result?.googleId === blog?.creator || user?.result?._id === blog?.creator) && (
                                            // <button className="btn btn-link px-20 float-right" onClick={() => dispatch(deleteBlog(blog._id))}>Delete</button>
                                            <button data-toggle="modal" data-target={'#delete' + blog._id} className="btn btn-link px-2 float-right">Delete</button>
                                        )}

                                        {(user?.result?.googleId === blog?.creator || user?.result?._id === blog?.creator) && (
                                            <button data-toggle="modal" data-target="#new" className="btn btn-link px-20 float-right" onClick={() => setCurrentId(blog._id)}>Edit</button>
                                        )}
                                    </div>
                                    
                                    <div className="modal fade" id={'delete' + blog._id} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                        <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-default">Are You Sure?</h6>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>This will delete your item. You can't undo this</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-warning" data-dismiss="modal" onClick={() => dispatch(deleteBlog(blog._id))}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
                
            <div className="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                <div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className=" p-0">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card bg-transparent pb-0">
                                    <div className="text-muted text-center mt-2 mb-3"><small>by Rossnowlagh on Oct 29th at 10:23 AM</small></div>
                                </div>
                                <img className="card-img-top" src="assets/img/blogs/" alt="placeholder" style={{height: 'auto', paddingLeft: '30px', paddingRight: '30px'}} />
                                <div className="card-body">
                                    <h5 className="h2 card-title mb-0">title</h5>
                                    <p className="card-text mt-4">description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    )
}

export default Blogs