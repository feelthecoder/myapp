import React, { useState } from "react";

function ToDoApp() {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addTask() {
        if (inputValue.trim() !== '') {
            setTasks([...tasks,inputValue]);
            console.log(tasks,inputValue)
            setInputValue('');
        }
    }

    function removeTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);

    }

    return (
        <div>
            <h1>TO-DO APP</h1>
            <input type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }} />

            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <div><li className="todoLi" key={index}>{task+"  "}<button onClick={()=>removeTask(index)}>Delete</button></li><br/></div>
                ))}
            </ul>

        </div>
    )
}

export default ToDoApp;