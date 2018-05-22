import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, withRouter, browserHistory } from 'react-router-dom';


import { createStore } from 'redux';
import { Provider } from 'react-redux';


import logo from './logo.svg';
import './App.css';
import './css/header.css';
import './css/fonts.css';
import './css/color-swatch.css';

import Header from './components/Header';

import ColorTemplate from './pages/ColorTemplate';
import FontTemplate from './pages/FontTemplate';

const initialState = {
  randomFont: randomFont()
}

console.log(initialState);

function randomFont(){

  var fontPairs = [
      'playfair-fauna',
      'quattrocento-fanwood',
      'opensans-prata',
      'alfaslab-gentiumbook',
      'nixieone-librebaskerville',
      'juliussans-crimson',
      'oswald-quattrocento',
      'playfair-slab',
      'oswald-opensans',
      'playfield-muli',
      'rufina-oxygen',
      'raleway-playfield',
      'opensans-opensanscondensed',
      'montserrat-oldstandard',
      'quattrocentosans-quattrocento',
      'quattrocento-quattrocentosans',
      'oswald-playfair'
  ]

  var randomFont = fontPairs[Math.floor(Math.random()*fontPairs.length)];

  console.log(randomFont);
  return randomFont;
}

function reducer(state = initialState, action){
  
  switch(action.type){
    case "RANDOMFONT":
      return {
        randomFont: randomFont()
      }
    case "RANDOMCOLOR":
      return {
        randomColor: state.count - 1
      }
    default:
      return state;
  }
  return state;
}

const store = createStore(reducer);

store.dispatch({type: "RANDOMFONT"});
store.dispatch({type: "RANDOMCOLOR"});

class App extends Component {



  render() {
    return (
      <Provider store={store} >
        
        <Router>
          <Fragment>
            <Header/>
            <Route path="/color" component={ColorTemplate}/>
            <Route path="/font" component={FontTemplate}/>
          </Fragment>
        </Router>
       
      </Provider>
    );
  }
}

export default App;
