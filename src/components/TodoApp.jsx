import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, removeTodo, toggleTodo} from '../redux/actions/todo'
export const TodoApp = () => {
    const  [text, setText] = useState('')
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todo);
    const onChangeInputText = (e) => {
        const t = e.currentTarget.value;
        setText(t)
    }

    const onClickAdd = () => {
        dispatch(addTodo(text));
        setText('');
    }

    const onClickDelete = (id) => {
        return () => {
            dispatch(removeTodo(id));
        }
    }

    return (
        <div>
            <div>
                <input value = {text} onChange= {onChangeInputText} />
                <button onClick={onClickAdd}>Add</button>
            </div>
            <ul>
                {
                    todos.map((todo, index) => {
                        const {text} = todo
                        return <li key={index}><button onClick={onClickDelete(todo.id)}>delete</button>{text}</li>
                    })
                }
            </ul>
        </div>
    )
}