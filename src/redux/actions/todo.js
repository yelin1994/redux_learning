import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../constants/todo'

let id = 0;
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        playload: {
            text,
            id: id++
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        playload: {
            id,
        }
    }
}

export const toggleTodo = (id, completed) => {
    return {
        type: TOGGLE_TODO,
        playload: {
            id, 
            completed
        }
    }
}