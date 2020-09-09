import {connect} from 'react-redux'
import React from 'react'
import {addTodo} from '../redux/actions/todo'
import {getTodoState} from '../redux/selectors/todo'

class AddTodo extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            input: ''
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo = () => {
        debugger
        this.props.addTodo(this.state.input);

        this.setState({input: ''})
    }

    updateInpute = (value) => {
        this.setState({
            input: value
        })
    }

    render() {
        debugger
        const { todos } = this.props;
        return (
            <div>
                <input onChange={e => this.updateInpute(e.target.value)} value={this.state.input}>
                </input>
                <button className='add-todo' onClick={this.handleAddTodo}>Add Todo</button>
                <ul>
                    {todos.map(todo => (todo.text))}
                </ul>
            </div>
        )
    }
}

export default connect(
    /**
     *  mapStateToProps,
     *  mapDispatchToprops
     *  
     */
    state => ({todos: getTodoState(state)}),
    { addTodo }
)(AddTodo)