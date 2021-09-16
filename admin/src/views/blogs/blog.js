import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deleteBlog, likeBlog } from '../../actions/blogs'

const Blog = ({blog, setCurrentId}) => {
    const dispatch = useDispatch()
    const user     = JSON.parse(localStorage.getItem('profile'))

    const Likes = () => {
        if(blog.likes.length > 0) {
            return blog.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
                <div>{blog.likes.length > 2 ? `You and ${blog.likes.length - 1} others` : `${blog.likes.length} like${blog.likes.length > 1 ? 's' : ''}`}</div>
            ) : (
                <div>{blog.likes.length} {blog.likes.length === 1 ? 'Like' : 'Likes'}</div>
            )
        }
        return <div>Like</div>
    }

    return(
        <div className="col-lg-4">
            <div className="card">
                <div style={{background: `url(${blog.selectedFile})`, height:'250px', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                <div className="card-body">
                    <h5 className="h2 card-title mb-0">{blog.title}</h5>
                    <h5 className="h2 card-title mb-0">{blog.name}</h5>
                    <small className="text-muted">Published on :{blog.createdAt} {moment(blog.createdAt).fromNow()}</small>
                    <p className="card-text mt-4">{blog.message}</p>
                    <p className="card-text mt-4">{blog.tags ? blog.tags.map((tag) => `#${tag} `) : 'No Tags'}</p>

                    <button className="btn btn-link px-0" disabled={!user?.result} onClick={() => dispatch(likeBlog(blog._id))}>
                        <Likes />
                    </button>
                    {(user?.result?.googleId === blog?.creator || user?.result?._id === blog?.creator) && (
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
                                <button className="btn btn-warning" onClick={() => dispatch(deleteBlog(blog._id))}>Delete Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog