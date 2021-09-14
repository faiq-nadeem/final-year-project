import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './views/components/header'
import Footer from './views/components/footer'

import Home from './views/home'
import Experts from './views/experts'
import Category from './views/category'
import About from './views/about'
import Contact from './views/contact'
import Blog from './views/blog'
import Login from './views/login'
import Register from './views/register'
import Account from './views/account'

function App() {
  return (
    <div className="App">

      <Router>
        <Header />

              <Switch>
                <Route path = "/" exact component         = {() => <Home />} />
                <Route path = "/Experts" exact component  = {() => <Experts />} />
                <Route path = "/Category" exact component = {() => <Category />} />
                <Route path = "/About" exact component    = {() => <About />} />
                <Route path = "/Contact" exact component  = {() => <Contact />} />
                <Route path = "/Blog" exact component     = {() => <Blog />} />
                <Route path = "/Login" exact component    = {() => <Login />} />
                <Route path = "/Register" exact component = {() => <Register />} />
                <Route path = "/Account" exact component  = {() => <Account />} />
              </Switch>
              
        <Footer />
      </Router>

    </div>
  );
}

export default App;
