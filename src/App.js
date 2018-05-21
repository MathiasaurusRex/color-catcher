import React, { Component } from 'react';

import { BrowserRouter as Router, Route, withRouter, browserHistory } from 'react-router-dom';



import logo from './logo.svg';
import './App.css';
import './css/fonts.css';
import './css/color-swatch.css';

import Color from './pages/Color';

class App extends Component {



  render() {
    return (
      <div className="" >
        <Router>
          <Route path="/color" component={Color}/>
        </Router>
       
      </div>
    );
  }
}

export default App;
