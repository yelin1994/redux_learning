import React from 'react';

export default class FetchDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data')
            .then(res => res.json())
            .then(data => {
                this.setState(() => {
                    return {
                        data
                    }
                })
            })
    }

    render() {
        const data = this.state.data;
        if (!data) {
            return 'loading ...'
        }

        return (
            <div>{data}</div>
        )
    }
}