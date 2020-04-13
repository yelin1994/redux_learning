import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App'
import {Home} from './components/Home'
import {About } from './components/About'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {routerConfig} from './router/index'
ReactDOM.render(
 <Router routes={routerConfig}>
   <Route path='/' component={App}></Route>
   <Route path='/home' component={Home}></Route> 
   <Route path='/home/about' component={About}></Route>
 </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
