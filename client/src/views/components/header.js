import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { LOGOUT } from '../../constants/actionTypes'
import decode from 'jwt-decode'
import Preloader from './preloader'
import Search from './search'

const Header = () => {

    const dispatch        = useDispatch()
    const history         = useHistory()
    const location        = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
        history.push('/Auth')
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
        <div>
            <Preloader />

            <div className="overlay"></div>
            <Link to="link.php" className="scrollToTop">
                <i className="fas fa-angle-up"></i>
            </Link>
            
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <ul className="menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Advisors" style={{color:'yellow'}}>Advisors</Link>
                            </li>
                            <li>
                                <Link to="/About">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Blogs">Blog</Link>
                            </li>
                            <li>
                                <Link to="/Pricing">Pricing</Link>
                            </li>
                            <li className="separator">
                                <span>|</span>
                            </li>
                            {
                                user?.result?.userRole === 'advisor' && (
                                    
                                    <li>
                                        <Link to={{pathname:'/Stream', state:{advisorKey: user?.result?.userKey}}}>Go Live! </Link>
                                    </li>
                                )
                            }
                            {user ? (
                                <li className="user-profile">
                                        {
                                            user.result.selectedFile ? (
                                                <img alt="placeholder" src={user.result.selectedFile} style={{width:'35px', height:'35px', borderRadius:'25px'}} />
                                            ) : (
                                                <h1>{user.result.name.charAt(0)}</h1>
                                            )
                                        }
                                    <ul className="submenu">
                                        <li>
                                            <Link to="/Account">Profile</Link>
                                        </li>
                                        <li onClick = {logout}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="" onClick = {logout}>Logout</a>
                                        </li>
                                    </ul>
                                </li>
                                ) : (

                                <li className="user-profile">
                                    <Link to="/Auth">
                                        Login / Register
                                    </Link>
                                </li> )
                            }
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>

            <Search />
        </div>
    )
}

export default Header
