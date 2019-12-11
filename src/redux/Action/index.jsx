export const ADD_TODO = 'Add_Todo'

export function addtodo(text) {
    return {
        type: ADD_TODO,
        text,
    };
}