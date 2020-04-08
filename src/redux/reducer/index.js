import { combineReducers } from 'redux'
import { reducer as todoReducer } from './todo'
import { reducer as visivilityFilterReducer } from './visivilityFilter'

export const reducer = combineReducers({
    todo: todoReducer,
    visivilityFilter: visivilityFilterReducer
})