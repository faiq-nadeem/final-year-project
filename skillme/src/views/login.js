import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Sign In
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
                                <form action="link.php">
                                    <div class="form-group">
                                        <label for="">Your Address</label>
                                        <input type="email" class="my-form-control" placeholder="Enter Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="text" class="my-form-control" placeholder="Enter Your Password" />
                                    </div>
                                    <p class="f-pass">
                                        Forgot your password? <a href="link.php">recover password</a>
                                    </p>
                                    <div class="button-wrapper">
                                        <button type="submit" class="custom-button">Sign IN</button>
                                    </div>
                                    <div class="or">
                                        <p>OR</p>
                                    </div>
                                    <div class="or-content">
                                        <p>Sign up with your email</p>
                                        <a href="link.php" class="or-btn"><img src="assets/images/google.png" alt="" /> Sign Up with Google</a>
                                        <p class="or-signup">
                                            Don't have an account? 
                                            <Link to="/Register">
                                            Sign up here
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
