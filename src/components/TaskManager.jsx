import { useState } from 'react';

function TaskManager() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Learn React" },
    ]);

    const addTask = () => {
        const newTask = {
            id: tasks.length + 1, 
            text: `Task ${tasks.length + 1}`,
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

  return (
    <div>
        <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => removeTask(task.id)}>Remove</button>
                </li>
            ))}
        </ul>   
    </div>
  );
}

export default TaskManager