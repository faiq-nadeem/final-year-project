import React from 'react'
import {Link} from 'react-router-dom'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allUsers: [],
            addUser : {
                firstName      : '',
                lastName       : '',
                username       : '',
                email          : '',
                password       : '',
                confirmPassword: '',
                dob            : '',
                gender         : '',
                city           : '',
                id             : '0'
            }
        }
        this.handleChange     = this.handleChange.bind(this)
        this.handleAddUser    = this.handleAddUser.bind(this)
    }

    handleChange(event) {
        this.setState({
            addUser:{
                ...this.state.addUser,
                [event.target.name]: event.target.value
            }
        })
    }
    
    handleAddUser() {
        if(this.state.addUser.password === this.state.addUser.confirmPassword){
            // console.log(this.state.addUser)
            fetch('http://localhost:8080/api/users/addUser', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.addUser)
            }).then(this.setState({
                addUser: {
                    firstName      : '',
                    lastName       : '',
                    username       : '',
                    email          : '',
                    password       : '',
                    confirmPassword: '',
                    dob            : '',
                    gender         : '',
                    city           : '',
                }
            }))
        }
        else{
            alert('Password Does not Match')
        }
    }

    render(){
        return(
            <div>
                <section className="breadcrumb-area profile-bc-area">
                    <div className="container">
                        <div className="content">
                            <h2 className="title extra-padding">
                                Register
                            </h2>
                            <ul className="breadcrumb-list extra-padding">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="log-reg container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="log-reg-inner">
                                <div class="section-header inloginp">
                                    <h2 class="title">
                                        Welcome to SKILL ME
                                    </h2>
                                </div>
                                <div class="main-content inloginp">
                                    <form>
                                        <h4 class="content-title">Already have an account? <Link to="/Login">Sign In Now</Link></h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div class="form-group">
                                                    <label for="">First Name*</label>
                                                    <input type="text" class="my-form-control" placeholder="Enter Your First Name" name="firstName" value={this.state.addUser.firstName} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div class="form-group">
                                                    <label for="">Last Name*</label>
                                                    <input type="text" class="my-form-control" placeholder="Enter Your Last Name" name="lastName" value={this.state.addUser.lastName} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Username*</label>
                                            <input type="text" class="my-form-control" placeholder="Enter Your Username" name="username" value={this.state.addUser.username} onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="">Email Address*</label>
                                            <input type="email" class="my-form-control" placeholder="Enter Your Email" name="email" value={this.state.addUser.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div class="form-group">
                                                    <label for="">Password*</label>
                                                    <input type="password" class="my-form-control" placeholder="Enter Your Password" name="password" value={this.state.addUser.password} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div class="form-group">
                                                    <label for="">Confirm Password*</label>
                                                    <input type="password" class="my-form-control" placeholder="Confirm Your Password" name="confirmPassword" value={this.state.addUser.confirmPassword} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Birthday*</label>
                                            <input type="date" class="my-form-control" name="dob" value={this.state.addUser.dob} onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="">Gender*</label>
                                            <div class="option">
                                                <div class="s-input mr-3">
                                                    <input type="radio" name="gender" value="male" onChange={this.handleChange}  id="male" /><label htmlFor="male">Male</label>
                                                </div>
                                                <div class="s-input">
                                                    <input type="radio" name="gender" value="female" onChange={this.handleChange}  id="female" /><label htmlFor="female">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="">City*</label>
                                            <input type="text" class="my-form-control" placeholder="Enter Your City" name="city" value={this.state.addUser.city} onChange={this.handleChange} />
                                        </div>
                                        <button type="submit" class="custom-button" data-toggle="modal" data-target="#email-confirm" onClick={this.handleAddUser}>Create Your Profile</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Register