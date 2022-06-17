import React, {useEffect} from 'react';
import './App.css';
import Template from './components/Template.js'
import Mainbody from './components/Mainbody.js'

const App = () => {
  return (
      <div className="app">
        <Template/>
        <Mainbody/>
      </div>
  )
}

export default App;
