import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state={
            email:'',
            items : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleChange(email){
        this.setState({email: email.target.value})
    }
    handleSubmit(email){
        email.preventDefault()
        if(this.state.email.length === 0) return

        const newItem = {
            email: this.state.email,
            id: Date.now()
        }

        this.setState(state => ({

            items: state.items.concat(newItem),
            email: ''

        }))
    }

    render(){
        return(
            <div class="main-content">
        
        <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
        
        <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary border-0 mb-0">
                        <div class="card-header bg-transparent pb-5 text-center">
                            <img src="" style={{width: '250px'}} alt="logo"/>
                            <div class="text-muted text-center mt-2 mb-3">
                                <h1>SIGN IN</h1>
                            </div>
                            {/* <?php
                            if ($status == 1) {
                            ?>
                                <p style="color:red;">Incorrect Credentials!</p>
                                <script>
                                    window.onload = function() {
                                        $("#notification").click();
                                    }
                                </script>
                            <?php
                            } elseif ($status == 2) {
                            ?>
                                <p style="color:red">Successfully Logged Out</p>
                            <?php
                            } ?> */}
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <TodoList todoitems={this.state.items}/>
                            <form role="form" onSubmit={this.handleSubmit}>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <label>{this.state.email}</label>
                                        <input class="form-control" placeholder="email" type="text" id="email" onChange={this.handleChange} value={this.state.email} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Password" type="password" id="password" />
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn my-4" name="dashboard_login">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="link.php" class="text-light" data-toggle="modal" data-target="#modal-form"><small>Forgot password?</small></a>
                            <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                                <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body p-0">
                                            <div class="card bg-secondary border-0 mb-0">
                                                <div class="card-header bg-transparent">
                                                    <div class="text-muted text-center mt-2 mb-3"><small>Request a reset email</small></div>
                                                </div>
                                                <div class="card-body px-lg-5 py-lg-5">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" id="email" value="admin@admin.com" hidden />
                                                    </div>
                                                    <div class="form-group mb-3">
                                                        <div class="input-group input-group-merge input-group-alternative">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                            </div>
                                                            <input class="form-control" placeholder="Email" type="email" id="email" />
                                                        </div>
                                                    </div>
                                                    <div class="text-center pt-30px">
                                                        <button class="btn btn-secondary" onclick="edit_password()">Reset Password</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Login

class TodoList extends React.Component{
    render() {
        return(
            <ul>
                {this.props.todoitems.map(item => (
                    <li key = {item.id} > {item.email}</li>
                ))}
            </ul>
        )
    }
}