/**
 * 
 */

 import { SET_FILTER } from '../constants/visibilityFilter'
 const initialState = ''

 export const reducer = (state = initialState, action) => {
     switch (action.type) {
         case SET_FILTER:  {
             return action.filter;
         }
         default:
             return state;
     }
 }
