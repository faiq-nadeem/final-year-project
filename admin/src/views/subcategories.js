import {useDispatch, useSelector} from 'react-redux'
import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'

import { getSubCategories, createSubCategory, updateSubCategory, deleteSubCategory, changeSubCategoryStatus } from '../actions/subCategories'
import { getCategories } from '../actions/categories'

const SubCategories = () => {

    const [currentId, setCurrentId] = useState(null)
    const dispatch                  = useDispatch()
    const user                      = JSON.parse(localStorage.getItem('profile'))
    const subCategories             = useSelector((state) => state.subCategories)
    const categories                = useSelector((state) => state.categories)
    const editSubCategory           = useSelector((state) => currentId ? state.subCategories.find((e) => e._id === currentId) : null)

    const [subCategoryData, setSubCategoryData] = useState({
        title            : '',
        message          : '',
        tags             : '',
        categoryId       : '',
        subCategoryStatus: 'active',
        selectedFile     : ''
    })

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getSubCategories())
    },[dispatch])

    useEffect(() => {
        if(editSubCategory) setSubCategoryData(editSubCategory)
    }, [editSubCategory])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId){
            dispatch(updateSubCategory(currentId, subCategoryData))
        } else {
            dispatch(createSubCategory({...subCategoryData, name: user?.result?.name}))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setSubCategoryData({
            title       : '',
            message     : '',
            tags        : '',
            categoryId  : '',
            subCategoryStatus: 'active',
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
            <div>
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="dashboard.php"><i className="fas fa-home"></i></a></li>
                                            <li className="breadcrumb-item"><a href="banners.php">SubCategories</a></li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new">Add New SubCategory</button>
                                </div>
                                <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                    <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                        <div className="modal-content">
                                            <form onSubmit={handleSubmit}>
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-default">Add new sub-category</h6>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-group mb-3">
                                                        <div className="row">
                                                            <div className="col-lg-6 input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="ni ni-books"></i></span>
                                                                </div>
                                                                <input className = "form-control" placeholder = "Title" type = "text" name = "title" value = {subCategoryData.title} onChange = {(e) => setSubCategoryData({...subCategoryData, title: e.target.value})} />
                                                            </div>
                                                            <div className="col-lg-6 input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <select className = "form-control" name = "categoryId"  value = {subCategoryData.categoryId} onChange = {(e) => setSubCategoryData({...subCategoryData, categoryId: e.target.value})}>
                                                                    <option>Choose Category</option>
                                                                        { categories.map((category) => (
                                                                            <option value={category._id}>{category.title}</option>
                                                                        ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12 input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="ni ni-books"></i></span>
                                                                </div>
                                                                <textarea className = "form-control" type = "text" name = "message" value = {subCategoryData.message} onChange = {(e) => setSubCategoryData({...subCategoryData, message: e.target.value})} >Enter description...</textarea>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12 input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="ni ni-books"></i></span>
                                                                </div>
                                                                <FileBase
                                                                    type="file"
                                                                    multiple={false}
                                                                    onDone={({base64}) => setSubCategoryData({...subCategoryData, selectedFile:base64})}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className = "form-control" type = "text" name = "tags" value = {subCategoryData.tags} onChange = {(e) => setSubCategoryData({...subCategoryData, tags: e.target.value.split(',')})} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
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
                <div className="container-fluid mt--6">
                    <div className="row">
                        {categories.map(category => (
                            <div className="col-xl-4 pb-4" key={category._id}>
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <img src={category.selectedFile} style={{width: '50px', borderRadius:'10px'}} alt="user" />
                                        <h5 className="h3 mb-0">{category.title}</h5>
                                    </div>
                                </div>
                                <div className="card-header py-0">
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush list my--3">
                                            {
                                                subCategories.map(subCategory => (
                                                        subCategory.categoryId === category._id ? (
                                                            <li className="list-group-item px-0" key={subCategory._id}>
                                                                <div className="row align-items-center">
                                                                    <img src={subCategory.selectedFile} style={{width: '50px', borderRadius:'10px'}} alt="user" />
                                                                    <div className="col ml--2">
                                                                        <h4 className="mb-0">
                                                                            {subCategory.title}
                                                                        </h4>
                                                                    </div>
                                                                    <div className="col-auto text-center row">
                                                                        {subCategory.subCategoryStatus === 'active' ? (
                                                                            <button type="button" className="btn btn-secondary mr-0" onClick={() => dispatch(changeSubCategoryStatus(subCategory._id))}><i className="fa fa-eye"></i></button>
                                                                        ) : (
                                                                            <button type="button" className="btn btn-warning mr-0"  onClick={() => dispatch(changeSubCategoryStatus(subCategory._id))}><i className="fa fa-eye-slash"></i></button>
                                                                        )}
                                                                        <button type="button" className="btn btn-secondary mr-0" data-toggle="modal" data-target="#new" onClick={() => setCurrentId(subCategory._id)}><i className="mr-0 fa fa-edit"></i></button>
                                                                        <button type="button" className="btn btn-warning mr-0" data-toggle="modal" data-target={"#delete"+subCategory.id}><i className="ni ni-fat-remove"></i></button>
                                                                    </div>
                                                                </div>
                                                                            
                                                                <div className="modal fade" id={"delete"+subCategory.id} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                                                    <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                                                        <div className="modal-content">
                                                                            <form>
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
                                                                                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={() => dispatch(deleteSubCategory(subCategory._id))}>Delete</button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ) : (
                                                            <div></div>
                                                        )
                                                    )
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default SubCategories

