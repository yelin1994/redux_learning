import React from 'react'
import { Link } from 'react-router-dom'

export class App extends React.Component {
    render() {
      return (<div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/home/about'>about</Link></li>
            </ul>
        </div>)       
    }
}