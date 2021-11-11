import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoadingOverlay from 'react-loading-overlay-ts'
import PropagateLoader from 'react-spinners/PropagateLoader'

import Sidebar from './views/components/sidebar'
import Navbar from './views/components/navbar'
import Footer from './views/components/footer'

import Dashboard from './views/dashboard'
import Categories from './views/categories'
import SubCategories from './views/subcategories'
import Advisors from './views/advisors'
import Interviewers from './views/interviewers'
import Blogs from './views/blogs'
import Users from './views/users'
import PaymentMethod from './views/paymentmethod'
import Account from './views/account'
import Auth from './views/components/auth'

import {loaderStatus} from '../src/actions/loader'

function App() {

  const dispatch  = useDispatch()
	const isLoading = useSelector((state) => state.isLoading)
	const user      = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
		dispatch(loaderStatus(false))
	}, [dispatch])

  return (
    <div>
      <LoadingOverlay
      active  = {isLoading}
            
      spinner = {
          <PropagateLoader 
            color = {'white'}
            css={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              color:'white',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 999,
              opacity: 1,
              }}
          />
        }
      />

        <BrowserRouter>
            
            <Sidebar />            
              <div className="main-content" id="panel">
                <Navbar />

                <Switch>
                  {!user?.result?._id ?  <Route exact path="/" component={Auth} /> : <Route path = "/" exact component = {Dashboard} />}

                  {user?.result?.userRole !== 'admin' ?  <Route exact path = "/Categories" component    = {Dashboard} /> : <Route path = "/Categories" exact component    = {Categories} />}
                  {user?.result?.userRole !== 'admin' ?  <Route exact path = "/SubCategories" component = {Dashboard} /> : <Route path = "/SubCategories" exact component = {SubCategories} />}
                  {user?.result?.userRole !== 'admin' ?  <Route exact path = "/Interviewers" component  = {Dashboard} /> : <Route path = "/Interviewers" exact component  = {Interviewers} />}
                  {user?.result?.userRole !== 'admin' ?  <Route exact path = "/Advisors" component      = {Dashboard} /> : <Route path = "/Advisors" exact component      = {Advisors} />}
                  {user?.result?.userRole !== 'admin' ?  <Route exact path = "/Users" component         = {Dashboard} /> : <Route path = "/Users" exact component         = {Users} />}
                  
                  <Route path = "/Blogs" exact component         = {Blogs} />
                  <Route path = "/PaymentMethod" exact component = {PaymentMethod} />
                  <Route path = "/Account" exact component       = {Account} />
                  <Route path = "/Auth" exact component          = {Auth} />
                </Switch>
            
              </div>
            <Footer />

          </BrowserRouter>
      </div>
  )
}

export default App
