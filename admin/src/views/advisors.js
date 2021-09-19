
import {useDispatch, useSelector} from 'react-redux'
import React from 'react'

import { getAdvisors, deleteUser, changeUserStatus, changeUserRole } from '../actions/users'

const Advisors = () => {

    const dispatch                  = useDispatch()
    const user                      = JSON.parse(localStorage.getItem('profile'))
    const users                     = useSelector((state) => state.users)

    dispatch(getAdvisors())

    if(!user?.result?.name) {
        return(
            <div>
                Please Sign In To continue
            </div>
        )
    }

    return(
        !users.length === 0 ? <div>There are no Advisors</div> : (
            <div>
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="dashboard.php"><i className="fas fa-home"></i></a></li>
                                            <li className="breadcrumb-item"><a href="users.php">Advisors = {users.length}</a></li>
                                        </ol>
                                    </nav>
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
                                                <th>Email</th>
                                                <th>D.O.B</th>
                                                <th>Gender</th>
                                                <th>Credits</th>
                                                <th>Role</th>
                                                <th>Edit/Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map(user => (
                                                <tr>
                                                    <td className="align-middle"><img src={user.selectedFile} style={{width: '50px', borderRadius:'10px'}} alt="Category" /></td>
                                                    <td className="align-middle text-wrap">{user.name}</td>
                                                    <td className="align-middle text-wrap">{user.email}</td>
                                                    <td className="align-middle text-wrap">{user.dob}</td>
                                                    <td className="align-middle text-wrap">{user.gender}</td>
                                                    <td className="align-middle text-wrap">{user.credits}</td>
                                                    <td className="align-middle">
                                                        {user.userRole === 'user' ? (
                                                            <button type="button" className="btn btn-secondary mr-0" onClick={() => dispatch(changeUserRole(user._id))}>USER</button>
                                                        ) : (
                                                            <button type="button" className="btn btn-warning mr-0" onClick={() => dispatch(changeUserRole(user._id))}>ADVISOR</button>
                                                        )}
                                                    </td>
                                                    <td className="align-middle">
                                                        {user.userStatus === 'active' ? (
                                                            <button type="button" className="btn btn-secondary mr-0" onClick={() => dispatch(changeUserStatus(user._id))}><i className="fa fa-eye"></i></button>
                                                        ) : (
                                                            <button type="button" className="btn btn-warning mr-0"  onClick={() => dispatch(changeUserStatus(user._id))}><i className="fa fa-eye-slash"></i></button>
                                                        )}
                                                        
                                                        <button type="button" className="btn btn-warning mr-0 ml-2" data-toggle="modal" data-target={'#delete' + user._id}><i className="ni ni-fat-remove"></i></button>
                                                        
                                                        <div className="modal fade" id={'delete' + user._id} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
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
                                                                            <button className="btn btn-warning" data-dismiss="modal" onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
                                                                        </div>
                                                                    </form>
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

export default Advisors