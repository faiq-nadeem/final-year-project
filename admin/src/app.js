import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from './views/components/sidebar';
import Navbar from './views/components/navbar';
import Footer from './views/components/footer';

import Dashboard from './views/dashboard';
import Category from './views/category';
import SubCategory from './views/subcategory';
import Advisors from './views/advisors';
import Blog from './views/blog';
import Users from './views/users';
import PaymentMethod from './views/paymentmethod';
import Account from './views/account';
import Login from './views/login';

function App() {
  return (
    <div>
      <Router>
          
          <Sidebar />            
            <div className="main-content" id="panel">
              <Navbar />

              <Switch>
                <Route path = "/" exact component              = {() => <Dashboard />} />
                <Route path = "/Category" exact component      = {() => <Category />} />
                <Route path = "/SubCategory" exact component   = {() => <SubCategory />} />
                <Route path = "/Advisors" exact component      = {() => <Advisors />} />
                <Route path = "/Blog" exact component          = {() => <Blog />} />
                <Route path = "/Users" exact component         = {() => <Users />} />
                <Route path = "/PaymentMethod" exact component = {() => <PaymentMethod />} />
                <Route path = "/Account" exact component       = {() => <Account />} />
                <Route path = "/Login" exact component         = {() => <Login />} />
              </Switch>
          
            </div>
          <Footer />

        </Router>
      </div>
  );
}

export default App;
