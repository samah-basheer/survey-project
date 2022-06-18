import React, {useEffect} from 'react';
import './App.css';
import Template from './components/Template.js'
import Mainbody from './components/Mainbody.js'
import Formheader from './components/Formheader.js'
import Question_form from './components/Question_form.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
      <div className="app">
          <Router>
              <Switch>
                  <Route path="/admin/form/:id">
                      <Formheader/>
                      <Question_form/>
                  </Route>
                  <Route path="/admin">
                      <Template/>
                      <Mainbody/>
                  </Route>
              </Switch>
          </Router>
      </div>
  )
}

export default App;
