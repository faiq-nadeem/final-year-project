import {useDispatch, useSelector} from 'react-redux'
import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'

import { getSingleUser,updateUser } from '../actions/users'


const Account = () => {

    const dispatch    = useDispatch()
    const user        = JSON.parse(localStorage.getItem('profile'))
    const userProfile = useSelector((state) => state.userProfile)
    const userId      = user?.result?._id

    const [userData, setUserData] = useState({
        name        : '',
        email       : '',
        message     : '',
        country     : '',
        city        : '',
        dob         : '',
        occupation  : '',
        gender      : '',
        birthplace  : '',
        selectedFile: ''
    })
    
    useEffect(() => {
        dispatch(getSingleUser(userId))
    }, [dispatch, userId])

    useEffect(() => {
        setUserData(userProfile)
    }, [userProfile])

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateUser(userId, userData))
    }

    return(
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Setting
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                Setting
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="user-setting-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-5">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="icon">
                                            <i className="fas fa-cogs"></i>
                                        </div> 
                                        <span>
                                            Account
                                        </span>
                                        <div className="t-icon">
                                            <i className="fas fa-plus"></i>
                                            <i className="fas fa-minus"></i>
                                        </div>
                                    </button>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul className="links">
                                            <li>
                                                <a  className="active" href="user-setting.html">Profile Info</a>
                                            </li>
                                            <li>
                                                <a href="user-change-pass.html">Change Password</a>
                                            </li>
                                            <li>
                                                <a href="user-close-account.html">Close Account</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="card">
                                <div className="card-header" id="headingThree">
                                    <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div className="icon">
                                            <i className="far fa-credit-card"></i>
                                        </div> 
                                        <span>
                                            Subscriptions & Payments
                                        </span>
                                        <div className="t-icon">
                                            <i className="fas fa-plus"></i>
                                            <i className="fas fa-minus"></i>
                                        </div>
                                    </button>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul className="links">
                                            <li>
                                                <a href="user-billing.html">Billing & Payout</a>
                                            </li>
                                            <li>
                                                <a href="user-purchase.html">View Purchase History</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-7 ">
                            <form onSubmit={handleSubmit}>
                                <div className="page-title">
                                    Profile Info
                                </div>
                                <div className="profile-about-box">
                                    <div className="top-bg"></div>
                                    <div className="p-inner-content">
                                        <div className="profile-img">
                                            <img className="height-inherit" src={userData.selectedFile} style={{width:'inherit'}} alt="" />
                                            <div className="active-online"></div>
                                        </div>
                                    </div>
                            
                                    <FileBase
                                        type="file"
                                        multiple={false}
                                        onDone={({base64}) => setUserData({...userData, selectedFile:base64})}
                                    />
                                </div>
                                <div className="input-info-box mt-30">
                                    <div className="header">
                                        About your Profile
                                    </div>
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Profile Name</label>
                                                    <input type="text" value={userData.name} onChange = {(e) => setUserData({...userData, name: e.target.value})} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Public Email</label>
                                                    <input type="text" placeholder="Public Email" value={userData.email} onChange = {(e) => setUserData({...userData, email: e.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="my-input-box">
                                                    <textarea palceholder={userData.message} onChange = {(e) => setUserData({...userData, message: e.target.value})} >{userData.message}</textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Country</label>
                                                    <select  onChange = {(e) => setUserData({...userData, country: e.target.value})}>
                                                        <option value="">{userData.country}</option>
                                                        <option value="">Paksitan</option>
                                                        <option value="">UnitedStates</option>
                                                        <option value="">United Kingdom</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">City</label>
                                                    <select  onChange = {(e) => setUserData({...userData, city: e.target.value})}>
                                                        <option value="">{userData.city}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Birthday</label>
                                                    <input type="date" value={userData.dob} onChange = {(e) => setUserData({...userData, dob: e.target.value})} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Occupation</label>
                                                    <input type="text" value={userData.occupation} onChange = {(e) => setUserData({...userData, occupation: e.target.value})} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Gender</label>
                                                    <select name="gender"  onChange = {(e) => setUserData({...userData, gender: e.target.value})} >
                                                        <option value={userData.gender}>{userData.gender}</option>
                                                        <option value="">Male</option>
                                                        <option value="">Female</option>
                                                        <option value="">Rather Not Say</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Birthplace</label>
                                                    <input type="text" value={userData.birthplace} onChange = {(e) => setUserData({...userData, birthplace: e.target.value})} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons  mt-30">
                                    <button type="submit" className="custom-button">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Account