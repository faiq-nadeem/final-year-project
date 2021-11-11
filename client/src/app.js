import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BrowserRouter, Route, Switch } from "react-router-dom"
import PaymentComponent from "./views/components/paymentComponent"
import LoadingOverlay from 'react-loading-overlay-ts'
import PropagateLoader from 'react-spinners/PropagateLoader'

import Header from './views/components/header'
import Footer from './views/components/footer'

import Home from './views/home'
import Auth from './views/components/auth'
import Advisors from './views/advisors'
import Categories from './views/categories'
import SubCategories from './views/subCategories'
import About from './views/about'
import Contact from './views/contact'
import Blogs from './views/blogs'
import AdvisorProfile from './views/advisorProfile'
import Pricing from './views/pricing'
import Account from './views/account'
import Stream from './views/stream'

import {loaderStatus} from '../src/actions/loader'

function App() {

  const dispatch  = useDispatch()
  const isLoading = useSelector((state) => state.isLoading)
  
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
        <Header />

              <Switch>
                <Route path = "/" exact component               = {Home} />
                <Route path = "/Auth" exact component           = {Auth} />
                <Route path = "/Advisors" exact component       = {Advisors} />
                <Route path = "/Categories" exact component     = {Categories} />
                <Route path = "/SubCategories" exact component  = {SubCategories} />
                <Route path = "/About" exact component          = {About} />
                <Route path = "/Contact" exact component        = {Contact} />
                <Route path = "/Blogs" exact component          = {Blogs} />
                <Route path = "/AdvisorProfile" exact component = {AdvisorProfile} />
                <Route path = "/Pricing" exact component        = {Pricing} />
                <Route path = "/Account" exact component        = {Account} />
                <Route path = "/Stream" exact component         = {Stream} />
                <Route path = "/Payment">
                  <PaymentComponent
                    keys={{
                      stripe: "pk_test_51Jb2uWJnnXXD2F4yYEOxsJMkVo7mJh2RF1t3JekVcsgpZfb66MnLXBTCzKsaFxmQFQCOmT5IAD4yk3toZ8NFOcBc005KCLwy8K",
                    }}
                  />
                </Route>
              </Switch>
              
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
