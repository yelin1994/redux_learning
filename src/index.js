import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {App} from './components/App'
import {Home} from './components/Home'
import {About } from './components/About'
// import App from './App';
import {App} from './components/test/App'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import {Route} from 'react-router'
const routerCOnfig = [{
  path: '/',
  component: App,
},
{path: '/About', component:Home},
{path: '/About/about', component: About}
]
function getChildRoute (routerConfig) {
   return routerConfig.map(router => {
     return (
       <Route path={router.path} component={router.component}>
         {router.childRoutes ? getChildRoute(router.childRoutes) : null}
       </Route>
     )
   })
}

window.addEventListener('beforeunload', (event) => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  window.localStorage.setItem('tab', '12312')
  // Chrome requires returnValue to be set.
  event.returnValue = '';
});


ReactDOM.render(
//  <Router>
//     <Route path='/' component={App}/>
//     <Route path='/about/about' component={About}></Route>
//     <Route path='/home' component={Home}></Route>
//     {/* <Switch>
//     {getChildRoute(routerCOnfig)}
//     </Switch> */}
   
//  </Router>,
  <App></App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
