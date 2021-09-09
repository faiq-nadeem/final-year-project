import React from 'react'

const Blog = () => {
    return (
        <div>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><a href="dashboard.php"><i className="fas fa-home"></i></a></li>
                                        <li className="breadcrumb-item"><a href="blogs.php">Blogs</a></li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-6 col-5 text-right">
                                <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new">Add New Blog</button>
                                <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                    <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h6 className="modal-title" id="modal-title-default">New Blog</h6>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="card-body px-lg-5 py-lg-5 text-center">
                                                <form action="action.php" method="POST" enctype="multipart/form-data">
                                                    <div className="form-group mb-3">
                                                        <img id="show_add_image" className="pb-2" style={{width:'350px'}} alt="placeholder" />
                                                        <input className="form-control" name="file" type="file" id="add_blog_image" />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <div className="input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                            </div>
                                                            <input className="form-control" placeholder="Title" type="text" name="title" />
                                                            <input type="text" className="form-control" name="date" value="date today" hidden />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <textarea id="add_editor" className="form-control" type="text" name="description">Enter description...</textarea>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-secondary" name="add_blog">Add Blog</button>
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
                    <div className="col-lg-4">
                        <div className="card">
                            <div style={{background: 'url(assets/img/blogs/)', height:'250px', backgroundSize: 'cover'}}></div>
                            <div className="card-body">
                                <h5 className="h2 card-title mb-0">title</h5>
                                <small className="text-muted">Published on : date</small>
                                <p className="card-text mt-4">description</p>
                                <a data-toggle="modal" data-target="#view" href="link.php" className="btn btn-link px-0">View article</a>
                                <a data-toggle="modal" data-target="#delete" href="link.php" className="btn btn-link px-2 float-right">Delete</a>
                                <a data-toggle="modal" data-target="#edit" onclick="edit_editor" href="link.php" className="btn btn-link px-20 float-right">Edit</a>
                            </div>
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
                    <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                        <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h6 className="modal-title" id="modal-title-default">Edit Blog</h6>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5 text-center">
                                    <form action="action.php?id=" method="POST" enctype="multipart/form-data">
                                        <div className="form-group mb-3">
                                            <img id="show_edit_image" className="pb-2" style={{width:'350px'}} alt="blog" />
                                            <input className="form-control" name="file" type="file" id="edit_blog_image" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                </div>
                                                <input className="form-control" value="title" type="text" name="title" />
                                                <input type="text" className="form-control" name="date" value="date today" hidden />
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <textarea id="add_editor" className="form-control" type="text" name="description">description</textarea>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-secondary" name="edit_blog">Update Blog</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
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
                                <form action="action.php?id=id" method="POST" className="modal-footer">
                                    <button type="submit" className="btn btn-warning" name="delete_blog">Delete Blog</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
