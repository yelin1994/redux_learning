import React from 'react'
import { createBrowserHistory } from 'history'
import { match as matchPath } from 'path-to-regexp'
const history = createBrowserHistory();

// matchPath('/about/:id')
// const matchPath = () => true;
export class Route extends React.Component {
    componentWillMount() {
        history.listen((location, action) => {
           this.forceUpdate();
        })
    }

    render() {
        const {
            path,
            component: Component, 
            render
        } = this.props;
        const pathname = window.location.pathname;
        const matcher = matchPath(path);
        const match = matcher(pathname);
        if (!match) return null;
        if (Component) {
            return <Component match={match}></Component> // 所有的组件相当于取到一个match
        }
        if (render) {
            return render({match});
        }
        return null;
    }
}

export class Link extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        history.push(this.props.to);
    }


    render() {
        const {
            to, 
            children,
        } = this.props;
        return (
            <a href={to} onClick={this.handleClick}>{children}</a>
        )
    }

}