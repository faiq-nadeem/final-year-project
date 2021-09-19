import {useDispatch, useSelector} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'

import { getAdvisors } from '../actions/users'

const Experts = () => {

    const dispatch = useDispatch()
    const user     = JSON.parse(localStorage.getItem('profile'))
    const users    = useSelector((state) => state.users)

    dispatch(getAdvisors())

    // if(!user?.result?.name) {
    //     return(
    //         <div>
    //             Please Sign In To continue
    //         </div>
    //     )
    // }

    return(
        // !users.length === 0 ? <div>There are no Advisors</div> : (
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Experts
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                Experts
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="community-section inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-filter">
                                <div className="left">
                                    <Link to="/Category" data-toggle="modal" data-target="#exampleModalCenter">
                                        <i className="fas fa-sliders-h"></i>  Filter by categories
                                    </Link>
                                </div>
                                <div className="right">
                                    <span className="span">
                                        Order By : 
                                    </span>
                                    <div className="filter-right">
                                        <select className="nice-select select-bar">
                                            <option value="">Latest Active</option>
                                            <option value="">NEW</option>
                                            <option value="">OLD</option>
                                            <option value="">POPULAR</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            
                            {users.map(user => (
                                <div className="single-community-box">
                                    <div className="img">
                                        <img src={user.selectedFile} alt="" />
                                    </div>
                                    <div className="content">
                                        <Link to={{pathname:'/Profile', state:{userId: user._id}}} className="title">
                                            {user.name} / {user.email}
                                        </Link>
                                        <p className="text">
                                            Graphic Designer
                                        </p>
                                    </div>
                                    <div className="box-footer">
                                        <div className="left">
                                            <i className="fas fa-globe-americas"></i> Live
                                        </div>
                                        <div className="right">
                                            <i className="fas fa-users"></i> 100
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experts
