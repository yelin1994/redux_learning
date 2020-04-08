import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/todo'
 
const initialState = []

/**
 * 
 */
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            return [...state, {
                id: action.playload.id,
                text: action.playload.text,
                completed : false
            }]
        }
        case REMOVE_TODO: {
            const id  = action.playload.id
            return state.filter((todo) => todo.id !== id)
        }
        case TOGGLE_TODO: {
            const id = action.playload.id
            const nextCompleted = !action.playload.completed
            const idx = state.finIndex(todo => todo.id === id)
            return [
                ...state.slice(0, idx),
                {
                    ...state[idx],
                    completed: nextCompleted,
                },
                ...state.slice(idx + 1)
            ]
        }
        default: {
            return state
        }
    }
}

