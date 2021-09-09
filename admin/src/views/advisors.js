import React from 'react'

class Advisors extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allAdvisors: [],
            addAdvisor : {
                name       : '',
                username   : '',
                phone      : '',
                email      : '',
                password   : '',
                address    : '',
                description: '',
                id         : '0'
            },
            isUpdated: false
        }
        this.getAllAdvisors      = this.getAllAdvisors.bind(this)
        this.handleChange        = this.handleChange.bind(this)
        this.handleAddAdvisor    = this.handleAddAdvisor.bind(this)
        this.getAdvisor          = this.getAdvisor.bind(this)
        this.handleUpdateAdvisor = this.handleUpdateAdvisor.bind(this)
        this.deleteAdvisor       = this.deleteAdvisor.bind(this)
    }

    componentWillMount() {
        this.getAllAdvisors()
    }

    getAllAdvisors() {
        fetch('http://localhost:8080/api/advisors').then(res => res.json()).then(result => {
            this.setState({
                allAdvisors : result,
                isUpdated: false
            })
        })
    }

    handleChange(event) {
        this.setState({
            addAdvisor:{
                ...this.state.addAdvisor,
                [event.target.name]: event.target.value,
                id                 : this.state.addAdvisor.id
            }
        })
    }
    
    handleAddAdvisor() {
        // console.log(this.state.addAdvisor)
        fetch('http://localhost:8080/api/advisors/addAdvisor', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addAdvisor)
        }).then(this.setState({
            addAdvisor: {
                name       : '',
                username   : '',
                phone      : '',
                email      : '',
                password   : '',
                address    : '',
                description: '',
            },
            isUpdated: false
        }))
    }

    getAdvisor(event, id) {
        fetch('http://localhost:8080/api/advisors' + id).then(res => res.json()).then(result => {
            this.setState({
                addAdvisor: {
                    name       : result[0].name,
                    username   : result[0].username,
                    phone      : result[0].phone,
                    email      : result[0].email,
                    password   : result[0].password,
                    address    : result[0].address,
                    description: result[0].description,
                    id         : result[0].id
                },
                isUpdated: true
            })
        })
    }

    handleUpdateAdvisor() {
        fetch('http://localhost:8080/api/advisors' + this.state.addAdvisor.id, {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addAdvisor)
        }).then(
            this.getAllAdvisors()
        )
    }

    deleteAdvisor(event, id) {
        fetch('http://localhost:8080/api/advisors' + id, {
            method : 'DELETE',
        }).then(
            this.getAllAdvisors()
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
                                            <li className="breadcrumb-item"><a href="advisors.php">Advisor Accounts</a></li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new">Add New Advisor</button>
                                    <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                        <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-default">New Advisor</h6>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="card-body px-lg-5 py-lg-5 text-center">
                                                    <form>
                                                        {/* <div className="form-group mb-3">
                                                            <img id="show_add_image" className="pb-2" style={{width:'350px'}} alt="user" />
                                                            <input className="form-control" name="file" type="file" id="add_user_image" />
                                                        </div> */}
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className="form-control" placeholder="Name" type="text" name="name" value={this.state.addAdvisor.name} onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className="form-control" placeholder="Advisorname" type="text" name="username" value={this.state.addAdvisor.username} onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className="form-control" placeholder="Email" type="email" name="email" value={this.state.addAdvisor.email} onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className="form-control" placeholder="Phone" type="text" name="phone" value={this.state.addAdvisor.phone} onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className="form-control" placeholder="Password" type="text" name="password" value={this.state.addAdvisor.password} onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                                </div>
                                                                <input className="form-control" placeholder="Address" type="text" name="address" value={this.state.addAdvisor.address} onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <textarea className="form-control" type="text" name="description" value={this.state.addAdvisor.description} onChange={this.handleChange} >Enter description...</textarea>
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="submit" className="btn btn-secondary" name="add_user" onClick={this.state.isUpdated?this.handleUpdateAdvisor: this.handleAddAdvisor}>Add Advisor</button>
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
                                                <th>Id</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Password</th>
                                                <th>Address</th>
                                                <th>Status</th>
                                                <th>Edit/Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.allAdvisors.map(user => (
                                                <tr>
                                                    <td className="align-middle" key={user.id}>{user.id}</td>
                                                    <td className="align-middle"><img src="/assets/img/brand/white.jpg" style={{width: '50px', borderRadius:'10px'}} alt="Category" /></td>
                                                    <td className="align-middle">{user.name}</td>
                                                    <td className="align-middle">{user.username}</td>
                                                    <td className="align-middle">{user.email}</td>
                                                    <td className="align-middle">{user.phone}</td>
                                                    <td className="align-middle">{user.password}</td>
                                                    <td className="align-middle">{user.address}</td>
                                                    <td className="align-middle">
                                                        <button type="submit" className="btn btn-secondary mr-0" name="unban"><i className="fa fa-eye"></i></button>
                                                        <button type="submit" className="btn btn-warning mr-0" name="ban"><i className="fa fa-eye-slash"></i></button>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button type="button" className="btn btn-secondary m-1" data-toggle="modal" data-target="#new" onClick={(event) => this.getAdvisor(event, user.id)}><i className="fa fa-edit"></i></button>
                                                        <button type="button" className="btn btn-warning mr-0" data-toggle="modal" data-target={"#delete"+user.id}><i className="ni ni-fat-remove"></i></button>
                                                        
                                                        <div className="modal fade" id={"delete"+user.id} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
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
                                                                            <button type="submit" className="btn btn-warning" name="delete_category" onClick={(event) => this.deleteAdvisor(event, user.id)}>Delete</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                // console.log(user.id +" "+ user.name)
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


export default Advisors