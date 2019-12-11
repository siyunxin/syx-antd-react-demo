import {ADD_TODO } from '../Action/index'

let todos = '';

const todolist = (state=todos,action) =>{

    switch( action.type ){

        case ADD_TODO :
            return [
                ...state,{
                    todos: action.text
                }
            ]

        default :
            return state
    }
}
export default todolist