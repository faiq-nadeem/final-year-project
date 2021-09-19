import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './views/components/header'
import Footer from './views/components/footer'

import Home from './views/home'
import Auth from './views/components/auth'
import Experts from './views/experts'
import Categories from './views/categories'
import About from './views/about'
import Contact from './views/contact'
import Blogs from './views/blogs'
import Account from './views/account'
import Stream from './views/stream'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

              <Switch>
                <Route path = "/" exact component           = {Home} />
                <Route path = "/Auth" exact component       = {Auth} />
                <Route path = "/Experts" exact component    = {Experts} />
                <Route path = "/Categories" exact component = {Categories} />
                <Route path = "/About" exact component      = {About} />
                <Route path = "/Contact" exact component    = {Contact} />
                <Route path = "/Blogs" exact component      = {Blogs} />
                <Route path = "/Account" exact component    = {Account} />
                <Route path = "/Stream" exact component     = {Stream} />
              </Switch>
              
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
