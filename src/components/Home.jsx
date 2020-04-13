import React from 'react'

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const children = this.props.children ? this.props.children :
        <div>hello</div>

        return (
            <div>
                Home,
                {children}
            </div>
        )
    }
}