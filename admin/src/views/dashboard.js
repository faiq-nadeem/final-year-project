import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import { getCategories } from '../actions/categories'
import { getBlogs } from '../actions/blogs'
import { getUsers } from '../actions/users'
import { getAdvisors } from '../actions/advisors'

const Dashboard = () => {
    
    const dispatch   = useDispatch()
    const categories = useSelector((state) => state.categories)
    const blogs      = useSelector((state) => state.blogs)
    const users      = useSelector((state) => state.users)
    const advisors   = useSelector((state) => state.advisors)

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getBlogs())
        dispatch(getUsers())
        dispatch(getAdvisors()) 
    }, [dispatch])

    return (
        <div className="Dashboard">
            <div className="bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><a href="dashboard.php"><i className="fas fa-home"></i></a></li>
                                        <li className="breadcrumb-item"><a href="dashboard.php">Dashboard</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt--6">
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card card-stats">
                            
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title text-uppercase text-muted mb-0">Total Users</h5>
                                            <span className="h2 font-weight-bold mb-0">{users.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                            <i className="ni ni-app"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card card-stats">
                            
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title text-uppercase text-muted mb-0">Total Advisors</h5>
                                            <span className="h2 font-weight-bold mb-0">{advisors.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                            <i className="ni ni-favourite-28"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card card-stats">
                            
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title text-uppercase text-muted mb-0">Total Categories</h5>
                                            <span className="h2 font-weight-bold mb-0">{categories.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                            <i className="ni ni-tag"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card card-stats">
                            
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title text-uppercase text-muted mb-0">Total Blogs</h5>
                                            <span className="h2 font-weight-bold mb-0">{blogs.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                            <i className="ni ni-delivery-fast"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card bg-default">
                            <div className="card-header bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                        <h5 className="h3 text-white mb-0">Sales value</h5>
                                    </div>
                                    <div className="col">
                                        <ul className="nav nav-pills justify-content-end">
                                            <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                                                <a href="link.php" className="nav-link py-2 px-3 active" data-toggle="tab">
                                                    <span className="d-none d-md-block">Month</span>
                                                    <span className="d-md-none">M</span>
                                                </a>
                                            </li>
                                            <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                                                <a href="link.php" className="nav-link py-2 px-3" data-toggle="tab">
                                                    <span className="d-none d-md-block">Week</span>
                                                    <span className="d-md-none">W</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                
                                <div className="chart">
                                    <canvas id="chart-sales-dark" className="chart-canvas"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-header bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                        <h5 className="h3 mb-0">Total orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart">
                                    <canvas id="chart-bars" className="chart-canvas"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
