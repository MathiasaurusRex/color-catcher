import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, withRouter, browserHistory } from 'react-router-dom';



import logo from './logo.svg';
import './App.css';
import './css/fonts.css';
import './css/color-swatch.css';

import ColorTemplate from './pages/ColorTemplate';
import FontTemplate from './pages/FontTemplate';
class App extends Component {



  render() {
    return (
      <div className="" >
        <Router>
          <Fragment>
            <Route path="/color" component={ColorTemplate}/>
            <Route path="/font" component={FontTemplate}/>
          </Fragment>
        </Router>
       
      </div>
    );
  }
}

export default App;
