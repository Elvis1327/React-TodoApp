import { TYPES } from '../types/types';

// ADD TODO
export const addTodo = (todo) => {
    return {
        type: TYPES.addTodo,
        payload: todo
    };
};

export const editTodo = (todo) => {
    return {
        type: TYPES.editTodo,
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: TYPES.deleteTodo,
        payload: todo
    }
}



