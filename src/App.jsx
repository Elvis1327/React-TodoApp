import React, { useState } from 'react';
import './styles/styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from './actions/todo-action';

const App = () => {
    const dispatch = useDispatch();
    const { task } = useSelector(state => state.todoapp);
    const [ inputTask, setInputTask ] = useState('');

    // ADD TODO
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputTask.length <= 0){
            return false;
        }else{
            dispatch(addTodo({
                id: Date.now(),
                text: inputTask,
                done: false
            }));
        };
    };
    // EDITAR TODO
    const handleEditOneTodo = (todo) => {
        dispatch(editTodo(todo))
    };
    // DELETE TODO
    const handleDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo))
    }

    return (
        <div className="main-container-app">
            <div className="box-container">
                <form onSubmit={handleSubmit} className="todo-app-container">
                    <input
                        className="input"
                        type="text" 
                        placeholder="Introduce a  new Task here"
                        autoComplete="off"
                        name="task"
                        onChange={(e) => setInputTask(e.target.value)}
                    />
                    <button type="submit" className="button-task-add">Add</button>
                </form>
                {task.map(allTask => (
                    <div className="all-task" key={allTask.id}>
                    <p 
                        className={allTask.done === true ? 'all-task-p-true' : 'all-task-p-false'} 
                        onClick={() => handleEditOneTodo(allTask)}a>
                            {allTask.text}
                    </p>
                    <i 
                        className="fas fa-trash"
                        onClick={() => {handleDeleteTodo(allTask)}}>
                    </i>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default App;

