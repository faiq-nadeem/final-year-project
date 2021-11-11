import {useDispatch, useSelector} from 'react-redux'
import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'

import { getCategories, createCategory, updateCategory, deleteCategory, changeCategoryStatus } from '../actions/categories'

const Categories = () => {

    const [currentId, setCurrentId] = useState(null)
    const dispatch                  = useDispatch()
    const user                      = JSON.parse(localStorage.getItem('profile'))
    const categories                = useSelector((state) => state.categories)
    const editCategory              = useSelector((state) => currentId ? state.categories.find((e) => e._id === currentId) : null)

    const [categoryData, setCategoryData] = useState({
        title         : '',
        message       : '',
        tags          : '',
        categoryStatus: 'active',
        selectedFile  : ''
    })


    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])

    useEffect(() => {
        if(editCategory) setCategoryData(editCategory)
    },[editCategory])
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId){
            dispatch(updateCategory(currentId, {...categoryData, name: user?.result?.name}))
        } else {
            dispatch(createCategory({...categoryData, name: user?.result?.name}))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setCategoryData({
            title         : '',
            message       : '',
            tags          : '',
            categoryStatus: 'active',
            selectedFile  : ''
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
        !categories.length === 0 ? <div>There are no Category</div> : (
            <div>
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="dashboard.php"><i className="fas fa-home"></i></a></li>
                                            <li className="breadcrumb-item"><a href="blogs.php">Categories = {categories.length}</a></li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new">Add New Category</button>
                                    <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                        <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-default">{currentId ? 'EDIT PREVIOUS ' : 'CREATE A NEW '} Category</h6>
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
                                                                <input className = "form-control" placeholder = "Title" type = "text" name = "title" value = {categoryData.title} onChange = {(e) => setCategoryData({...categoryData, title: e.target.value})} />
                                                                </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <textarea className = "form-control" type = "text" name = "message" value = {categoryData.message} onChange = {(e) => setCategoryData({...categoryData, message: e.target.value})} >Enter description...</textarea>
                                                              </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className = "form-control" type = "text" name = "tags" value = {categoryData.tags} onChange = {(e) => setCategoryData({...categoryData, tags: e.target.value.split(',')})} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <FileBase
                                                                type="file"
                                                                multiple={false}
                                                                onDone={({base64}) => setCategoryData({...categoryData, selectedFile:base64})}
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
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="mb-0">All Accounts</h3>
                                </div>
                                <div className="table-responsive py-4">
                                    <table className="table table-flush" id="datatable-basic">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Tags</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { categories.map((category) => (
                                                <tr key={category._id}>
                                                    <td className="align-middle"><img src={category.selectedFile} style={{width: '50px', borderRadius:'10px'}} alt="Category" /></td>
                                                    <td className="align-middle text-wrap">{category.title}</td>
                                                    <td className="align-middle text-wrap">{category.message}</td>
                                                    <td className="align-middle text-wrap">{category.tags ? category.tags.map((tag) => `#${tag} `) : 'No Tags'}</td>
                                                    <td className="align-middle row">
                                                        {category.categoryStatus === 'active' ? (
                                                            <button type="button" className="btn btn-secondary mr-0" onClick={() => dispatch(changeCategoryStatus(category._id))}><i className="fa fa-eye"></i></button>
                                                        ) : (
                                                            <button type="button" className="btn btn-warning mr-0"  onClick={() => dispatch(changeCategoryStatus(category._id))}><i className="fa fa-eye-slash"></i></button>
                                                        )}
                                                        {(user?.result?.googleId === category?.creator || user?.result?._id === category?.creator) && (
                                                            <div>
                                                                <button type="button" className="btn btn-secondary m-1" data-dismiss="modal" data-toggle="modal" data-target="#new" onClick={() => setCurrentId(category._id)}><i className="fa fa-edit"></i></button>
                                                                <button type="button" className="btn btn-warning mr-0" data-toggle="modal" data-target={'#delete' + category._id}><i className="ni ni-fat-remove"></i></button>
                                                            </div>
                                                        )}
                                                        
                                                        <div className="modal fade" id={'delete' + category._id} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
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
                                                                        <button className="btn btn-warning" data-dismiss="modal" onClick={() => dispatch(deleteCategory(category._id))}>Delete Category</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Categories