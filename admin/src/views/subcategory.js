import React from 'react'

class SubCategory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allCategories   : [],
            allSubCategories: [],
            addSubCategory  : {
                name       : '',
                description: '',
                categoryId : '',
                id         : '0'
            },
            isUpdated: false
        }
        this.getAllCategories        = this.getAllCategories.bind(this)
        this.getAllSubCategories     = this.getAllSubCategories.bind(this)
        this.handleChange            = this.handleChange.bind(this)
        this.handleAddSubCategory    = this.handleAddSubCategory.bind(this)
        this.getSubCategory          = this.getSubCategory.bind(this)
        this.handleUpdateSubCategory = this.handleUpdateSubCategory.bind(this)
        this.deleteSubCategory       = this.deleteSubCategory.bind(this)
    }

    componentWillMount() {
        this.getAllCategories()
        this.getAllSubCategories()
    }

    getAllCategories() {
        fetch('http://localhost:8080/api/categories').then(res => res.json()).then(result => {
            this.setState({
                allCategories : result,
                isUpdated: false
            })
        })
    }

    getAllSubCategories() {
        fetch('http://localhost:8080/api/subCategories').then(res => res.json()).then(result => {
            this.setState({
                allSubCategories : result,
                isUpdated: false
            })
        })
    }

    handleChange(event) {
        this.setState({
            addSubCategory:{
                ...this.state.addSubCategory,
                [event.target.name]: event.target.value,
                id                 : this.state.addSubCategory.id
            }
        })
    }
    
    handleAddSubCategory() {
        // alert(JSON.stringify(this.state.addSubCategory))
        fetch('http://localhost:8080/api/subCategories/addSubCategory', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addSubCategory)
        }).then(this.setState({
            addSubCategory: {
                name       : '',
                description: '',
                categoryId : '',
            },
            isUpdated: false
        }))
    }

    getSubCategory(event, id) {
        fetch('http://localhost:8080/api/subCategories' + id).then(res => res.json()).then(result => {
            this.setState({
                addSubCategory: {
                    name       : result[0].name,
                    description: result[0].description,
                    categoryId : result[0].categoryId,
                    id         : result[0].id
                },
                isUpdated: true
            })
        })
    }

    handleUpdateSubCategory() {
        fetch('http://localhost:8080/api/subCategories' + this.state.addSubCategory.id, {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addSubCategory)
        }).then(
            this.getAllSubCategories()
        )
    }

    deleteSubCategory(event, id) {
        fetch('http://localhost:8080/api/subCategories' + id, {
            method : 'DELETE',
        }).then(
            this.getAllSubCategories()
        )
    }

    render(){
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
                                        <li className="breadcrumb-item"><a href="banners.php">Sub Categories</a></li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-6 col-5 text-right">
                                <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new" onclick="call_all_images()">
                                <span className="btn-inner--icon"><i className="ni ni-fat-add"></i></span>
                                <span className="btn-inner--text">Add Sub-category</span>
                                </button>
                            </div>
                            <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                    <div className="modal-content">
                                        <form>
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
                                                            <input className="form-control" placeholder="Enter Name" type="text" name="name" value={this.state.addSubCategory.name} onChange={this.handleChange} />
                                                        </div>
                                                        <div className="col-lg-6 input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                            </div>
                                                            <select className="form-control" name="categoryId"  value={this.state.addSubCategory.categoryId} onChange={this.handleChange}>
                                                                <option>Choose Category</option>
                                                                    {this.state.allCategories.map(Category => (
                                                                        <option value={Category.id}>{Category.name}</option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="ni ni-books"></i></span>
                                                            </div>
                                                            <textarea rows="3" className="form-control" type="text" name="description" value={this.state.addSubCategory.description} onChange={this.handleChange}>Enter Description</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3 my-modal-scroll">
                                                    <div className="row justify-content-center" id="call_all_images">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary my-4" name="add_sub_category" onClick={this.state.isUpdated?this.handleUpdateSubCategory: this.handleAddSubCategory}>Add sub-category</button>
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
                    {this.state.allCategories.map(Category => (
                        <div className="col-xl-4 pb-4">
                            <div className="card-header">
                                <h5 className="h3 mb-0">{Category.name}</h5>
                            </div>
                            <div className="card-header py-0">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush list my--3">
                                        {this.state.allSubCategories.map(subCategory => (
                                            
                                            <li className="list-group-item px-0">
                                                <div className="row align-items-center">
                                                    <img src="/assets/img/brand/white.png" style={{width: '50px', borderRadius:'10px'}} alt="user" />
                                                    <div className="col ml--2">
                                                        <h4 className="mb-0">
                                                            {subCategory.name}
                                                        </h4>
                                                    </div>
                                                    <div className="col-auto text-center">
                                                        <button type="button" className="btn btn-secondary mr-0" data-toggle="modal" data-target="#new" onClick={(event) => this.getSubCategory(event, subCategory.id)}><i className="mr-0 fa fa-edit"></i></button>
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
                                                                    <button type="submit" className="btn btn-warning" name="delete_subCategory" onClick={(event) => this.deleteSubCategory(event, subCategory.id)}>Delete</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                                
                                        ))}
                                        <li className="list-group-item px-0">
                                            <div className="row align-items-center">
                                                <div className="col ml--2">
                                                    <h4 className="mb-0">
                                                        <a href="#!">No Sub Category</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        // console.log(subCategory.id +" "+ subCategory.name)
                    ))}
                </div>
            </div>
        </div>
        )
    }
}


export default SubCategory

