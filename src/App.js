import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoApp } from './components/TodoApp'
import { MutationOb} from './components/MutationObserver'
import AddTodo from './components/AddTodo';

import {store} from './redux/store'
import { Provider } from 'react-redux'
// import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      {/* <TodoApp></TodoApp> */}
      <AddTodo></AddTodo>
    </Provider>
  )
}

// function App() {
//   return (
//     <div>
//        <MutationOb></MutationOb>
//     </div>
//   )
// }

export default App;
