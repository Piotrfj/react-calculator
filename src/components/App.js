import React, { Component } from 'react';
import './App.css';
import Calc from './calculator/Calc';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import Header from './layout/Header';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';
import ContactPage from './layout/ContactPage';
import WorkInProgress from './layout/WorkInProgress';

class App extends Component {
  render() {


    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={WorkInProgress} />
          <Route path="/calculator" exact component={Calc} />
          <Route path="/contact" exact component={ContactPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
