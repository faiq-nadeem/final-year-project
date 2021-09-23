import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { LOGOUT } from '../../constants/actionTypes'
import decode from 'jwt-decode'

const Navbar = () => {

    const dispatch        = useDispatch()
    const history         = useHistory()
    const location        = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
        history.push('/Auth')
        window.location.reload()
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token

        if(token){
            const decodeToken = decode(token)

            if(decodeToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                        <div className="form-group mb-0">
                            <div className="input-group input-group-alternative input-group-merge">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                                </div>
                                <input className="form-control" placeholder="Search" type="text" />
                            </div>
                        </div>
                        <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </form>
                    <ul className="navbar-nav align-items-center  ml-md-auto ">
                        <li className="nav-item d-xl-none">
                            <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item d-sm-none">
                            <a className="nav-link" href="nill" data-action="search-show" data-target="#navbar-search-main">
                                <i className="ni ni-zoom-split-in"></i>
                            </a>
                        </li>
                        {user?.result?.name && (
                            <>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="nill" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ni ni-ungroup"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                                        <div className="row shortcuts px-4">
                                            <a href="products.php" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                                                <i className="ni ni-app"></i>
                                                </span>
                                                <small>Products</small>
                                            </a>
                                            <a href="category.php" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                                                <i className="ni ni-books"></i>
                                                </span>
                                                <small>Categories</small>
                                            </a>
                                            <a href="payments.php" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                                                <i className="ni ni-credit-card"></i>
                                                </span>
                                                <small>Payments</small>
                                            </a>
                                            <a href="orders.php" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                                                <i className="ni ni-basket"></i>
                                                </span>
                                                <small>New Orders</small>
                                            </a>
                                                <a href="orders.php" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                                                <i className="ni ni-money-coins"></i>
                                                </span>
                                                <small>Pending Orders</small>
                                            </a>
                                            <a href="orders.php" className="col-4 shortcut-item">
                                                <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                                                <i className="ni ni-fat-remove"></i>
                                                </span>
                                                <small>Cancelled Orders</small>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </>
                        )
                    }
                    </ul>
                    <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                        <li className="nav-item dropdown">
                            {user ? (
                                <div>
                                    <a className="nav-link pr-0" href="null" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="media align-items-center">
                                            <div className="media-body  ml-2  d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold">Welcome, {user.result.name} &nbsp;</span>
                                            </div>
                                            <span className="avatar avatar-sm rounded-circle">
                                                {
                                                    user.result.imageUrl ? (
                                                        <img alt="placeholder" src={user.result.imageUrl} />
                                                    ) : (
                                                        <h1>{user.result.name.charAt(0)}</h1>
                                                    )
                                                }
                                            </span>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu  dropdown-menu-right ">
                                        <Link to="/Account" className="dropdown-item">
                                            <i className="ni ni-settings-gear-65"></i>
                                            <span>Account</span>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <button onClick = {logout} className="dropdown-item">
                                            <i className="ni ni-user-run"></i>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <Link to = "/Auth">
                                        <div className="media align-items-center">
                                            <div className="media-body  ml-2  d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold">LOGIN &nbsp;</span>
                                            </div>
                                            <span className="avatar avatar-sm rounded-circle">
                                                <img alt="placeholder" src="/assets/img/brand/favicon.png" />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar