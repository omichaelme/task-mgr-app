function TaskList({ tasks }) {
  return (
    <><ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
      </ul><div>TaskList</div></>
  );
}

const sampleTasks = [
    { id: 1, title: "Complete React Tutorial" },
    { id: 2, title: "Build a To-Do app" },
    { id: 3, title: "Read about Vite" }
]

export default function App() {
    return <TaskList tasks={sampleTasks.map(task => task.title)} />;
}