import React from 'react'

export class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     userName: '',
        //     password: '',
        // },
        this.passwordRef = null;
    }

    handleSubmit = (e) => {
    
    }

    handleFocus = () => {
    
        this.passwordRef.removeAttribute('readonly');
    }

    render() {
        return (
            <form action='' onSubmit={this.handleSubmit}>
                <label>username:</label> <input type="text" name="username"></input>
                <label>password:</label> <input name="password" type="password" readOnly onFocus={this.handleFocus} ref={el => this.passwordRef = el}/>
                <button type="submit"></button>;
            </form>
        )
    }
}