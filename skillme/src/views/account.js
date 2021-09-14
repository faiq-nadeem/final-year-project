import React from 'react'

class Account extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allUsers: [],
            addUser : {
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
        this.getAllUsers      = this.getAllUsers.bind(this)
        this.handleChange     = this.handleChange.bind(this)
        this.handleAddUser    = this.handleAddUser.bind(this)
        this.getUser          = this.getUser.bind(this)
        this.handleUpdateUser = this.handleUpdateUser.bind(this)
        this.deleteUser       = this.deleteUser.bind(this)
    }

    componentWillMount() {
        this.getAllUsers()
    }

    getAllUsers() {
        fetch('http://localhost:8080/api/users').then(res => res.json()).then(result => {
            this.setState({
                allUsers : result,
                isUpdated: false
            })
        })
    }

    handleChange(event) {
        this.setState({
            addUser:{
                ...this.state.addUser,
                [event.target.name]: event.target.value,
                id                 : this.state.addUser.id
            }
        })
    }
    
    handleAddUser() {
        // console.log(this.state.addUser)
        fetch('http://localhost:8080/api/users/addUser', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addUser)
        }).then(this.setState({
            addUser: {
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

    getUser(event, id) {
        fetch('http://localhost:8080/api/users' + id).then(res => res.json()).then(result => {
            this.setState({
                addUser: {
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

    handleUpdateUser() {
        fetch('http://localhost:8080/api/users' + this.state.addUser.id, {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addUser)
        }).then(
            this.getAllUsers()
        )
    }

    deleteUser(event, id) {
        fetch('http://localhost:8080/api/users' + id, {
            method : 'DELETE',
        }).then(
            this.getAllUsers()
        )
    }

    render(){
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
                                <div className="page-title">
                                    Profile Info
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="profile-about-box">
                                            <div className="top-bg"></div>
                                            <div className="p-inner-content">
                                                <div className="profile-img">
                                                    <img src="assets/images/profile/profile-user.png" alt="" />
                                                    <div className="active-online"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="up-photo-card mb-30">
                                            <div className="icon">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    Change Avatar
                                                </h4>
                                                <span>
                                                    120x120p size minimum
                                                </span>
                                            </div>
                                        </div>
                                        <div className="up-photo-card">
                                            <div className="icon">
                                                <i className="fas fa-image"></i>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    Change Cover
                                                </h4>
                                                <span>
                                                    1200x300p size minimum
                                                </span>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <input type="text" placeholder="Profile Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Public Email</label>
                                                    <input type="text" placeholder="Public Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="my-input-box">
                                                    <textarea name="" placeholder="Write a little description about you..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Country</label>
                                                    <select name="" id="">
                                                        <option value="" disabled selected>Select Country</option>
                                                        <option value="">United State</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">City</label>
                                                    <select name="" id="">
                                                        <option value="" disabled selected>Select City</option>
                                                        <option value="">New Work</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Birthday</label>
                                                    <input type="date" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Occupation</label>
                                                    <input type="text" placeholder="Occupation" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Status</label>
                                                    <select name="" id="">
                                                        <option value="">In a Relationship</option>
                                                        <option value="">Single</option>
                                                        <option value="">Marid</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="my-input-box">
                                                    <label for="">Birthplace</label>
                                                    <input type="text" placeholder="Birthplace" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons  mt-30">
                                    <button type="submit" className="custom-button">Save Changes</button>
                                    <button className="custom-button2">Discard All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Account