import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Sidebar from './views/components/sidebar';
import Navbar from './views/components/navbar';
import Footer from './views/components/footer';

import Dashboard from './views/dashboard';
import Categories from './views/categories';
import SubCategories from './views/subcategories';
import Advisors from './views/advisors';
import Blogs from './views/blogs';
import Users from './views/users';
import PaymentMethod from './views/paymentmethod';
import Account from './views/account';
import Auth from './views/components/auth';

function App() {

    const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <div>
      <BrowserRouter>
          
          <Sidebar />            
            <div className="main-content" id="panel">
              <Navbar />

              <Switch>
                {!user?.result?.name ?  <Route exact path="/" component={Auth} /> : <Route path = "/" exact component = {Dashboard} />}

                {user?.result?.userRole !== 'admin' ?  <Route exact path = "/Categories" component    = {Dashboard} /> : <Route path = "/Categories" exact component    = {Categories} />}
                {user?.result?.userRole !== 'admin' ?  <Route exact path = "/SubCategories" component = {Dashboard} /> : <Route path = "/SubCategories" exact component = {SubCategories} />}
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

export default App;
