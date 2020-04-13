import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoApp } from './components/TodoApp'

import {store} from './redux/store'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'

// function App() {
//   return (
//     <Provider store={store}>
//       <TodoApp></TodoApp>
//     </Provider>
//   )
// }

function App() {
  return (
    <div>
      <Link to='/'>首页</Link>
      <Link to='/about'>关于</Link>
    </div>
  )
}

function Home(props) {
  const children = props.children ? props.children : <div>hello</div>
  return (
    <div>
      Home,
      children,
    </div>
  )
}

function About() {
  return <div>about</div>
}

export default App;
