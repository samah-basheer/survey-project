import React, {useEffect} from 'react';
import './App.css';
import Template from './components/Template.js'
import Mainbody from './components/Mainbody.js'
import Formheader from './components/Formheader.js'
import Question_form from './components/Question_form.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Homeheader from "./components/Homeheader";
import Success from "./components/Success";
import Singlesurveyloop from "./components/Singlesurveyloop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
      <div className="app">
          <Router>
              <Switch>
                  <Route path="/login">
                      <Login/>
                  </Route>
                  <Route path="/admin/form/:id">
                      <Formheader/>
                      <Question_form/>
                  </Route>
                  <Route path="/admin">
                      <Template/>
                      <Mainbody/>
                  </Route>
                  <Route path="/success">
                      <Homeheader/>
                      <Success/>
                  </Route>
                  <Route path="/survey/:id">
                      <Homeheader/>
                      <Singlesurveyloop/>
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </Router>
      </div>
  )
}

export default App;
