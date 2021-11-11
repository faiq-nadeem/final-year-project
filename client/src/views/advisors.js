import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import { getAdvisors } from '../actions/advisors'

const Experts = () => {

    const dispatch = useDispatch()
    const advisors    = useSelector((state) => state.advisors)

    useEffect(() => {
        dispatch(getAdvisors())
    }, [dispatch])

    return(
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
                                    <Link to="/Categories" data-toggle="modal" data-target="#exampleModalCenter">
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
                        {advisors.map(advisor => (
                            <div className="col-lg-4 col-md-6">
                                <div className="single-community-box">
                                    <div className="img">
                                        <img src={advisor.selectedFile} alt="" />
                                    </div>
                                    <div className="content">
                                        <Link to={{pathname:'/AdvisorProfile', state:{advisorId: advisor._id}}} className="title">
                                            {advisor.name} / {advisor.email}
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
                                            <i className="fas fa-advisors"></i> 100
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experts
