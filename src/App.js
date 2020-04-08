import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoApp } from './components/TodoApp'

import {store} from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <TodoApp></TodoApp>
    </Provider>
  )
}

export default App;
