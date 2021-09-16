
import {useDispatch, useSelector} from 'react-redux'
import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'

import { getBlogs, createBlog, updateBlog } from '../../actions/blogs'
import Blog from './blog'

const Blogs = ({currentId, setCurrentId}) => {
    const blogs = useSelector((state) => state.blogs)
    // console.log(blogs)
    
    const [blogData, setBlogData] = useState({
        // creator     : '',
        title       : '',
        message     : '',
        tags        : '',
        selectedFile: ''
    })

    const blog = useSelector((state) => currentId ? state.blogs.find((e) => e._id === currentId) : null)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if(blog) setBlogData(blog)
    },[blog])
    
    useEffect(() => {
        dispatch(getBlogs())
      }, [dispatch])

    const handleSubmit = (e) => {
        
        // alert(JSON.stringify(blogData))
        e.preventDefault()

        if(currentId){
            dispatch(updateBlog(currentId, {...blogData, name: user?.result?.name}))
        } else {
            dispatch(createBlog({...blogData, name: user?.result?.name}))
        }

        clear()
    }

    const clear = () => {
        // setCurrentId(null)
        setBlogData({
            // creator     : '',
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
            !blogs.length === 0 ? <div>There is no blog</div> : (
                
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
                                                    <h6 className="modal-title" id="modal-title-default">{currentId ? 'EDIT PREVIOUS ' : 'CREATE A NEW '} Blog</h6>
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
                                                                <textarea className = "form-control" type = "text" name = "tags" value = {blogData.tags} onChange = {(e) => setBlogData({...blogData, tags: e.target.value.split(',')})} >Enter description...</textarea>
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
                                <div key={blog._id}>
                                    <Blog blog={blog} setCurrentId={setCurrentId}/>
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