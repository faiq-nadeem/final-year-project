import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import { getCategories } from '../actions/categories'

const Categories = () => {

    const dispatch   = useDispatch()
    const categories = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getCategories())
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

                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="filter-area">
                                        <div className="filter-main">
                                            
                                            <ul className="nav grid-button tab-menu"   role="tablist">
                                                <Link to="/Advisors" data-toggle="modal" data-target="#exampleModalCenter">
                                                    <i className="fa fa-users"></i>  Back To Advisors
                                                </Link> 
                                            </ul>
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
                                        
                                        {categories.map((category) => (
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-product">
                                                    <div className="img">
                                                        <img src={category.selectedFile} alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">
                                                            {category.title}
                                                        </h4>
                                                        <a className="hover-effect" href="/SubCategories"><span className="font-16-semibold">Explore</span></a>
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
