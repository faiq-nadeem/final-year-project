import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {signIn} from '../../actions/auth'

const initialState ={
    email          : '',
    password       : ''
}

const Auth = () => {
    const dispatch                        = useDispatch()
    const history                         = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData]         = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
            dispatch(signIn(formData, history))
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    return (
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
                                <img src="/assets/img/profile-box-bg.png" style={{width: '100%'}} alt="logo"/>
                                <div class="text-muted text-center mt-2 mb-3">
                                    <h1>SIGN IN</h1>
                                </div>
                            </div>
                            <div class="card-body px-lg-5 py-lg-5">
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group mb-3">
                                        <div class="input-group input-group-merge input-group-alternative">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                            </div>
                                            <input class="form-control" placeholder="email" name="email" type="text" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group input-group-merge input-group-alternative">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input class="form-control" placeholder="Password" name="password" type = {showPassword ? "text" : "password"} onChange = {handleChange} handleShowPassword = {handleShowPassword} />
                                            <button type="button" className="btn fa fa-eye" onClick = {handleShowPassword}></button>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn my-4">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth