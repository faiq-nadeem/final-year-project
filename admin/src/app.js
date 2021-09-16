import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Sidebar from './views/components/sidebar';
import Navbar from './views/components/navbar';
import Footer from './views/components/footer';

import Dashboard from './views/dashboard';
import Category from './views/category';
import SubCategory from './views/subcategory';
import Advisors from './views/advisors';
import Blogs from './views/blogs';
import Users from './views/users';
import PaymentMethod from './views/paymentmethod';
import Account from './views/account';
import Auth from './views/components/auth';
// import Streamer from './views/streamer';

function App() {
  return (
    <div>
      <BrowserRouter>
          
          <Sidebar />            
            <div className="main-content" id="panel">
              <Navbar />

              <Switch>
                <Route path = "/" exact component              = {Dashboard} />
                <Route path = "/Category" exact component      = {Category} />
                <Route path = "/SubCategory" exact component   = {SubCategory} />
                <Route path = "/Advisors" exact component      = {Advisors} />
                <Route path = "/Blogs" exact component         = {Blogs} />
                <Route path = "/Users" exact component         = {Users} />
                <Route path = "/PaymentMethod" exact component = {PaymentMethod} />
                <Route path = "/Account" exact component       = {Account} />
                <Route path = "/Auth" exact component          = {Auth} />
                {/* <Route path = "/Streamer" exact component      = {() => <Streamer />} /> */}
              </Switch>
          
            </div>
          <Footer />

        </BrowserRouter>
      </div>
  )
}

export default App;
