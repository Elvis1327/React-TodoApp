import { TYPES } from '../types/types';

const initialState = {
    task: []
};

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.addTodo:
            return {
                ...state,
                task: [...state.task, action.payload]
            };
        case TYPES.editTodo:
            return {
                ...state,
                task: state.task.map(eachTask => {
                    return eachTask.id === action.payload.id 
                        ? {...eachTask, done: !eachTask.done} 
                        : eachTask
                })
            };
        case TYPES.deleteTodo:
            return {
                ...state,
                task: state.task.filter(oneTask => oneTask.id !== action.payload.id)
            }
        default: 
            return state;
    };
};


