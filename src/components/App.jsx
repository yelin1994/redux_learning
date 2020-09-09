import React from 'react'
import { Link, __RouterContext} from 'react-router-dom'
import _ from 'lodash'

/**
 * useHistory hook
 */

export class App extends React.Component {
    // static contextType = __RouterContext;
    handleChangeRouter = () => {
        console.log(this.context)
        this.props.history.push('/about/about');
        // const history = useHistory();
        // history.push('/About/about');
    }
    handleGoHome = () => {
        this.props.history.push('/home');
    }

    componentWillUnmount() {
        debugger
    }

    handleCLickLodash = _.debounce((e) => {
        console.log(e)
    }, 100)
    render() {
        const {children} = this.props
        return (
            <div>
                <ul>
                    <li><button onClick={this.handleGoHome}>Home</button></li>
                    <li><button onClick={this.handleChangeRouter} >bout</button></li>
                    <li><button onClick={this.handleCLickLodash}>lodash test</button></li>
                </ul>
                <div>
                    {children}
                </div>
            </div>
        ) 
    }
}