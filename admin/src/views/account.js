import React from 'react'

const Account = () => {
    return (
        <div>
            <div class="header bg-primary pb-6">
                <div class="container-fluid">
                    <div class="header-body">
                        <div class="row align-items-center py-4">
                            <div class="col-lg-6 col-7">
                                <h6 class="h2 text-white d-inline-block mb-0">Account Setting</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt--6">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-4"></div>
                        <div class="col-lg-4 card-wrapper">
                            <div class="card">
                                
                                <div class="card-body">
                                    <a href="link.php">
                                        <img src="/assets/img/brand/white.png" class="img-center" style={{width: '200px'}} alt="placeholder" />
                                    </a>
                                    <div class="pt-4 text-center">
                                        <h5 class="h3 title">
                                            <span class="d-block mb-1">change password</span>
                                            <small class="h4 font-weight-light text-muted">You will need to enter new password after logout.</small>
                                        </h5>
                                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal-form">Change Password</button>
                                        <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                                            <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-body p-0">
                                                        <div class="card bg-secondary border-0 mb-0">
                                                            <div class="card-header bg-transparent pb-5">
                                                                <div class="text-muted text-center mt-2 mb-3"><small>Change Password</small></div>
                                                            </div>
                                                            <form action="action.php" method="POST">
                                                                <div class="card-body px-lg-5 py-lg-5">
                                                                    <div class="form-group">
                                                                        <input type="email" class="form-control" name="email" value="admin@admin.com" hidden />
                                                                    </div>
                                                                    <div class="form-group mb-3">
                                                                        <div class="input-group input-group-merge input-group-alternative">
                                                                            <div class="input-group-prepend">
                                                                                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                                            </div>
                                                                            <input class="form-control" placeholder="Old password" type="password" name="old_password" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <div class="input-group input-group-merge input-group-alternative">
                                                                            <div class="input-group-prepend">
                                                                                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                                            </div>
                                                                            <input class="form-control" placeholder="new password" type="password" name="new_password" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <div class="input-group input-group-merge input-group-alternative">
                                                                            <div class="input-group-prepend">
                                                                                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                                            </div>
                                                                            <input class="form-control" placeholder="confirm password" type="password" name="confirm_password" />
                                                                        </div>
                                                                    </div>
                                                                    {/* <div class="custom-control custom-control-alternative custom-checkbox">
                                                                        <input class="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                                                        <label class="custom-control-label" for=" customCheckLogin">
                                                                            <span class="text-muted">Logout after changing password</span>
                                                                        </label>
                                                                    </div> */}
                                                                    <div class="text-center pt-30px">
                                                                        <button type="submit" class="btn btn-secondary" name="edit_password">Update</button>
                                                                    </div>
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
                    <div class="col-lg-4 col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Account
