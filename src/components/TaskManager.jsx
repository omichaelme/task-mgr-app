import { useState } from 'react';
import TaskItem from './TaskItem';  // Use your styled component

function TaskManager() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Learn React", completed: false },
    ]);

    const addTask = () => {
        const newTask = {
            id: Date.now(), // Better ID generation
            text: `Task ${tasks.length + 1}`,
            completed: false  // Add completed field
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id 
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    return (
        <div>
            <button onClick={addTask}>Add Task</button>
            <div style={{ marginTop: '1rem' }}>
                {tasks.map((task) => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        onToggle={toggleTask}
                        onRemove={removeTask}
                    />
                ))}
            </div>   
        </div>
    );
}

export default TaskManager;