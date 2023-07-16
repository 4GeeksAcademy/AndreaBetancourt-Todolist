import React, { useState } from "react";

export const TodoList = () => {

    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState('')

    const handleAdd = e => setNewTasks(e.target.value)
    
    const addTasks = (e) => {
        e.preventDefault();
        if(newTasks.trim() !== ''){
            setTasks ([...tasks, newTasks]) 
            setNewTasks('');
        }
    }

    const deleteTasks = (tarea) =>{
        const taskOk = tasks.filter((item) => item !== tarea)
        setTasks(taskOk);
    }


    return (
        <div className="container">
            <h1>Tareas</h1>
            <form onSubmit={addTasks}>
                <div className="mb-3">
                        <input type="text" className="form-control" onChange={handleAdd} value={newTasks}/>
                </div>
            </form>
            <ul className="list-group">
                {tasks.map((tasks, i) => (
                    <li className="list-group-item form-control d-flex justify-content-between" key={i}>
                        {tasks}
                        <span className="delete-icon" onClick={() => deleteTasks(tasks)}><i className="fas fa-trash"></i></span>
                    </li>

                ))}
                {tasks.length === 0 ? (<li className="list-group form-control">No tasks, add tasks</li>) :
                    (<li className="list-group form-control text-start px-2"><small>{tasks.length} items</small></li>)}
            </ul>            
        </div>
    )
}

