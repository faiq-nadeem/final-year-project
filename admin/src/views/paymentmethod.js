import React from 'react'

const PaymentMethod = () => {
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
                                        <li className="breadcrumb-item"><a href="blogs.php">Payment Methods</a></li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-6 col-5 text-right">
                                <button type="button" className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#new">Add Payment Method</button>
                                <div className="modal fade" id="new" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                    <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h6 className="modal-title" id="modal-title-default">New Payment Method</h6>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="card-body px-lg-5 py-lg-5 text-center">
                                                <form action="action.php" method="POST" enctype="multipart/form-data">
                                                    <div className="row form-group mb-3">
                                                        <div className="col-lg-6 input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                            </div>
                                                            <input className="form-control" placeholder="Name On Your Card" type="text" name="name" />
                                                        </div>
                                                        <div className="col-lg-6 input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                            </div>
                                                            <input className="form-control" placeholder="Account Email" type="text" name="email" />
                                                        </div>
                                                    </div>
                                                    <div className="row form-group mb-3">
                                                        <div className="col-lg-4 input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                            </div>
                                                            <input className="form-control" placeholder="Card_number" type="text" minlength="15" maxlength="15" name="card_number" />
                                                        </div>
                                                        <div className="col-lg-4 input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                            </div>
                                                            <input className="form-control" placeholder="Date (MM/YY)" type="text" name="date" />
                                                        </div>
                                                        <div className="col-lg-4 input-group input-group-merge">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fa fa-expand-alt"></i></span>
                                                            </div>
                                                            <input className="form-control" placeholder="CCV" type="text" name="ccv" />
                                                        </div>
                                                    </div>
                                                    <div className="row form-group mb-3">
                                                        <div className="text-center col-lg-3">
                                                            <p>Paypal</p>
                                                            <label className="custom-toggle custom-toggle-darker">
                                                                <input type="radio" name="card_type" value="1" checked />
                                                                <span className="custom-toggle-slider rounded-circle" data-label-off="NO" data-label-on="YES"></span>
                                                            </label>
                                                        </div>
                                                        <div className="text-center col-lg-3">
                                                            <p>Strip</p>
                                                            <label className="custom-toggle custom-toggle-darker">
                                                                <input type="radio" name="card_type" value="2" />
                                                                <span className="custom-toggle-slider rounded-circle" data-label-off="NO" data-label-on="YES"></span>
                                                            </label>
                                                        </div>
                                                        <div className="text-center col-lg-3">
                                                            <p>Master</p>
                                                            <label className="custom-toggle custom-toggle-darker">
                                                                <input type="radio" name="card_type" value="3" />
                                                                <span className="custom-toggle-slider rounded-circle" data-label-off="NO" data-label-on="YES"></span>
                                                            </label>
                                                        </div>
                                                        <div className="text-center col-lg-3">
                                                            <p>Visa</p>
                                                            <label className="custom-toggle custom-toggle-darker">
                                                                <input type="radio" name="card_type" value="4" />
                                                                <span className="custom-toggle-slider rounded-circle" data-label-off="NO" data-label-on="YES"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-secondary" name="add_payment_card">Add Card</button>
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
                    <div className="col-lg-5 card bg-gradient-primary" style={{margin: '30px'}}>
                        
                        <div className="card-body">
                            <div className="row justify-content-between align-items-center">
                                <div className="col">
                                    <img src="assets/img/payments/" alt="placeholder" />
                                </div>
                                <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <label className="custom-toggle  custom-toggle-white" onchange="change_status()">
                                                    <input type="checkbox" id="live_status" checked="" />
                                                    <input type="checkbox" id="live_status" />
                                                <span className="custom-toggle-slider rounded-circle" data-label-off="OFF" data-label-on="ON"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <form className="form-primary" action="action.php?id=" method="POST">
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-single-02"></i></span>
                                            </div>
                                            <input className="form-control" value="name" type="text" name="name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                            </div>
                                            <input className="form-control" value="email" type="text" name="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-credit-card"></i></span>
                                            </div>
                                            <input className="form-control" value="card_number" type="text" maxlength="15" name="card_number" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                                    </div>
                                                    <input className="form-control" value="exp_date" type="text" name="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                    </div>
                                                    <input className="form-control" value="ccv" type="text" name="ccv" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="link.php" className="btn btn-danger float-left" data-toggle="modal" data-target="#deleteid'] ?>">Delete card</a>
                                    <button type="submit" className="btn btn-secondary float-right" name="edit_payment_card">Update card</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="deleteid'] ?>" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
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
                                <form action="action.php?id=id'] ?>" method="POST" className="modal-footer">
                                    <button type="submit" className="btn btn-warning" name="delete_payment_card">Delete Card</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
