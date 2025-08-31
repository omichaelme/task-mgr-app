import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';


function TaskList({ tasks }) {
    return (
        <div>
            <h2>Task List</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <TaskItem task={task} />
                    <Link to={`/tasks/${task.id}`}>View Details</Link>
                    <hr />
                </div>
            ))}
        </div>
    );
}


export default TaskList;