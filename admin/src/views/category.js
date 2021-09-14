import React from 'react'

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allCategories: [],
            addCategory : {
                name       : '',
                description: '',
                id         : '0'
            },
            isUpdated: false
        }
        this.getAllCategories     = this.getAllCategories.bind(this)
        this.handleChange         = this.handleChange.bind(this)
        this.handleAddCategory    = this.handleAddCategory.bind(this)
        this.getCategory          = this.getCategory.bind(this)
        this.handleUpdateCategory = this.handleUpdateCategory.bind(this)
        this.deleteCategory       = this.deleteCategory.bind(this)
    }

    componentWillMount() {
        this.getAllCategories()
    }

    getAllCategories() {
        fetch('http://localhost:8080/api/categories').then(res => res.json()).then(result => {
            this.setState({
                allCategories : result,
                isUpdated: false
            })
        })
    }

    handleChange(event) {
        this.setState({
            addCategory:{
                ...this.state.addCategory,
                [event.target.name]: event.target.value,
                id                 : this.state.addCategory.id
            }
        })
    }
    
    handleAddCategory() {
        // alert(JSON.stringify(this.state.addCategory))
        fetch('http://localhost:8080/api/categories/addCategory', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addCategory)
        }).then(this.setState({
            addCategory: {
                name       : '',
                description: '',
            },
            isUpdated: false
        }))
    }

    getCategory(event, id) {
        fetch('http://localhost:8080/api/categories' + id).then(res => res.json()).then(result => {
            this.setState({
                addCategory: {
                    name       : result[0].name,
                    description: result[0].description,
                    id         : result[0].id
                },
                isUpdated: true
            })
        })
    }

    handleUpdateCategory() {
        fetch('http://localhost:8080/api/categories' + this.state.addCategory.id, {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addCategory)
        }).then(
            this.getAllCategories()
        )
    }

    deleteCategory(event, id) {
        fetch('http://localhost:8080/api/categories' + id, {
            method : 'DELETE',
        }).then(
            this.getAllCategories()
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
                                            <li className="breadcrumb-item"><a href="categories.php">Category Accounts</a></li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new">Add New Category</button>
                                    <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                        <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                            <form className="modal-content">
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-default">Add new category</h6>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body pb-0">
                                                    <div className="form-group mb-3">
                                                        <div className="input-group input-group-merge input-group-alternative">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="ni ni-books"></i></span>
                                                            </div>
                                                            <input className="form-control" placeholder="Category Name" type="text" name="name" value={this.state.addCategory.name} onChange={this.handleChange}  />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <div className="input-group input-group-merge input-group-alternative">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="ni ni-books"></i></span>
                                                            </div>
                                                            <textarea className="form-control" type="text" name="description" value={this.state.addCategory.description} onChange={this.handleChange} >Category Description</textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 my-modal-scroll">
                                                        <div className="row justify-content-center" id="call_all_images">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer pt-0">
                                                    <button type="submit" className="btn btn-primary my-4" name="add_category" onClick={this.state.isUpdated?this.handleUpdateCategory: this.handleAddCategory}>Add category</button>
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
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="mb-0">All Accounts</h3>
                                </div>
                                <div className="table-responsive py-4">
                                    <table className="table table-flush" id="datatable-basic">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Id</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Actions</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.allCategories.map(category => (
                                                <tr>
                                                    <td className="align-middle" key={category.id}>{category.id}</td>
                                                    <td className="align-middle"><img src="/assets/img/brand/white.png" style={{width: '50px', borderRadius:'10px'}} alt="Category" /></td>
                                                    <td className="align-middle">{category.name}</td>
                                                    <td className="align-middle">{category.description}</td>
                                                    <td className="align-middle">
                                                        <button type="submit" className="btn btn-secondary mr-0" name="unban"><i className="fa fa-eye"></i></button>
                                                        <button type="submit" className="btn btn-warning mr-0" name="ban"><i className="fa fa-eye-slash"></i></button>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button type="button" className="btn btn-secondary m-1" data-toggle="modal" data-target="#new" onClick={(event) => this.getCategory(event, category.id)}><i className="fa fa-edit"></i></button>
                                                        <button type="button" className="btn btn-warning mr-0" data-toggle="modal" data-target={"#delete"+category.id}><i className="ni ni-fat-remove"></i></button>
                                                        
                                                        <div className="modal fade" id={"delete"+category.id} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
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
                                                                            <button type="submit" className="btn btn-warning" name="delete_category" onClick={(event) => this.deleteCategory(event, category.id)}>Delete</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                // console.log(category.id +" "+ category.name)
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
    }
}


export default Category
