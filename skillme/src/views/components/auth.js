import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { AUTH } from '../../constants/actionTypes'
import {signUp, signIn} from '../../actions/auth'
import FileBase from 'react-file-base64'

const initialState ={
    firstName      : '',
    lastName       : '',
    email          : '',
    password       : '',
    confirmPassword: '',
    dob            : '',
    gender         : '',
    userRole       : 'user',
    userStatus     : 'active',
    credits        : 0,
    selectedFile   : ''

}

const Auth = () => {
    const dispatch                        = useDispatch()
    const history                         = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp]         = useState(false)
    const [formData, setFormData]         = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // alert(JSON.stringify(formData))
        if(isSignUp) {
            dispatch(signUp(formData, history))
        } else {
            dispatch(signIn(formData, history))
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token  = res?.tokenId;
        // console.log(result, token)

        try {
            dispatch({ 
                type: AUTH,
                data: { 
                    result, 
                    token 
                } 
            });
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = () => {
        console.log('google sign in failed please try again')
    }
    return(
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
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

            <section className="log-reg container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="log-reg-inner">
                            <div className="section-header inloginp">
                                <h2 className="title">
                                    Welcome to SKILL ME
                                </h2>
                                <p className="or-signup">
                                    <button className="custom-button" onClick = {switchMode}>
                                        {isSignUp ? 'Already Have an Account? Sign In' : 'Do not have an account? Sign Up'}
                                    </button>
                                </p>
                            </div>
                            <div className="main-content inloginp">
                                <form onSubmit = {handleSubmit}>
                                    {   isSignUp && (
                                        <>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">First Name*</label>
                                                        <input type="text" className="my-form-control" placeholder="Enter Your First Name" name="firstName"  onChange = {handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label for="">Last Name*</label>
                                                        <input type="text" className="my-form-control" placeholder="Enter Your Last Name" name="lastName" onChange = {handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                    <div className="form-group">
                                        <label for="">Email Address*</label>
                                        <input type="email" className="my-form-control" placeholder="Enter Your Email" name="email" onChange = {handleChange} />
                                    </div>
                                    <div className="form-group">
                                            <label for="">Password*</label>
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <input className="my-form-control form-control" placeholder="Enter Your Password" name="password" type = {showPassword ? "text" : "password"} onChange = {handleChange} handleShowPassword = {handleShowPassword} />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text right-icon"><button type="button" className="btn fa fa-eye" onClick = {handleShowPassword}></button></span>
                                            </div>
                                        </div>
                                    </div>

                                    {isSignUp &&
                                        <div>
                                            <div className="form-group">
                                                <label for="">Confirm Password*</label>
                                                        <input type="password" className="my-form-control" placeholder="Confirm Your Password" name="confirmPassword" onChange = {handleChange} />
                                                {/* <button type="button" className="btn fa fa-eye" onClick = {handleShowPassword}></button> */}
                                            </div>
                                            <div className="form-group">
                                                <label for="">Date Of Birth*</label>
                                                <input type="date" className="my-form-control" name="dob" onChange = {handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label for="">Gender*</label>
                                                <div className="option">
                                                    <div className="s-input mr-3">
                                                        <input type="radio" name="gender" value="male" onChange = {handleChange} id="male" /><label htmlFor="male">Male</label>
                                                    </div>
                                                    <div className="s-input mr-3">
                                                        <input type="radio" name="gender" value="female" onChange = {handleChange} id="female" /><label htmlFor="female">Female</label>
                                                    </div>
                                                    <div className="s-input">
                                                        <input type="radio" name="gender" value="undefined" onChange = {handleChange} id="undefined" /><label htmlFor="undefined">Rather Not Say</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="">Profile Picture*</label>
                                                <FileBase
                                                    type="file"
                                                    multiple={false}
                                                    onDone={({base64}) => setFormData({...formData, selectedFile:base64})}
                                                />
                                            </div>
                                        </div>
                                    }
                                    <div className="row justify-content-center">
                                        <button className="custom-button" type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                                    </div>
                                </form>
                                <div className="or">
                                    <p>OR</p>
                                </div>
                                <div className="or-content">
                                    <GoogleLogin
                                            clientId = "670432850281-pl1qai55svsfvkr0mi94ca2lp0h3o0re.apps.googleusercontent.com"
                                            render   = {(renderProps) => (
                                                <button className="or-btn" onClick = {renderProps.onClick} disabled = {renderProps.disabled}><img src="assets/images/google.png" alt="" />{isSignUp ? 'Sign Up' : 'Sign In'} With Google</button>
                                            )}
                                            onSuccess    = {googleSuccess}
                                            onFailure    = {googleFailure}
                                            cookiePolicy = "single_host_origin"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Auth