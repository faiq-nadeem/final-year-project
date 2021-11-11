import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import { getSubCategories } from '../actions/subCategories'

const Categories = () => {

    const dispatch   = useDispatch()
    const subCategories = useSelector((state) => state.subCategories)

    useEffect(() => {
        dispatch(getSubCategories())
    }, [dispatch])
    return (
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Category
                        </h2>
                        <ul className="breadcrumb-list extra-padding">
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>

                            <li>
                                Category
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="product-category">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 product-md-grid">
                            <div className="widget-1 widget-check">
                                <div className="widget-1-body">
                                    <h6 className="subtitle">Gender</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="gender" id="men" /><label for="men">Men (30)</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="gender" id="women" /><label for="women">Women (25)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-check">
                                <div className="widget-1-body">
                                    <h6 className="subtitle">Status</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="status" id="live" /><label htmlFor="live">Live (20)</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="status" id="offline" /><label htmlFor="offline">Offline (15)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-check rating">
                                <div className="widget-1-body">
                                    <h6 className="subtitle">Rating</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="s1" /><label for="s1">
                                                <span className="text">
                                                    5 star(9)
                                                </span>
                                                <span className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="s2" /><label for="s2">
                                                <span className="text">
                                                    4 star(9)
                                                </span>
                                                <span className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="s3" /><label for="s3">
                                                <span className="text">
                                                    3 star(9)
                                                </span>
                                                <span className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="s4" /><label for="s4">
                                                <span className="text">
                                                    2 star(9)
                                                </span>
                                                <span className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="s5" /><label for="s5">
                                                <span className="text">
                                                    1 star(9)
                                                </span>
                                                <span className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="filter-area">
                                        <div className="filter-main">
                                            
                                            <ul className="nav grid-button tab-menu"   role="tablist">
                                                <Link to="/Categories" data-toggle="modal" data-target="#exampleModalCenter">
                                                    <i className="fa fa-users"></i>  Back To Categories
                                                </Link> 
                                            </ul>
                                            <div className="right">
                                                <div className="item">
                                                    <span className="show">Show :</span>
                                                    <select className="select-bar">
                                                        <option value="12">12</option>
                                                        <option value="15">15</option>
                                                        <option value="18">18</option>
                                                        <option value="21">21</option>
                                                        <option value="24">24</option>
                                                        <option value="27">27</option>
                                                        <option value="30">30</option>
                                                    </select>
                                                </div>
                                                <div className="item">
                                                    <span className="show">Sort By :</span>
                                                    <select className="select-bar">
                                                        <option value="showing">New</option>
                                                        <option value="exclusive">exclusive</option>
                                                        <option value="trending">trending</option>
                                                        <option value="most-view">most view</option>
                                                    </select>
                                                </div>
                                                <div className="serch-icon">
                                                    <i className="fas fa-search"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="search-box">
                                            <input type="text" placeholder="Enter Your Text hear" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-gird-tab">
                                    <div className="row">
                                        
                                        {subCategories.map((subCategory) => (
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-product">
                                                    <div className="img">
                                                        <img src={subCategory.selectedFile} alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">
                                                            {subCategory.title}
                                                        </h4>
                                                        <a className="hover-effect" href="single-shope.html"><span className="font-16-semibold">Explore</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories
