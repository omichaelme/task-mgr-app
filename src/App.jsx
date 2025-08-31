import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';                    // ← Uncomment
import TaskList from './pages/TaskList';            // ← Uncomment  
import TaskDetails from './pages/TaskDetails';      // ← Uncomment
import Navigation from './components/Navigation';   // ← Uncomment
import ThemeSwitcher from './components/ThemeSwitcher'; // ← Uncomment
import TaskManager from './components/TaskManager'; // ← Add this too

function App() {
  const sampleTasks = [
      { id: 1, text: "Complete React Tutorial", completed: false },
      { id: 2, text: "Build a To-Do app", completed: true },
      { id: 3, text: "Build an e-commerce App", completed: false},
];

return (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>Task Manager</h2>
      <ThemeSwitcher />
    </div>

    <Navigation />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<TaskManager />} />
      <Route path="/tasks/:id" element={<TaskDetails tasks={sampleTasks} />} />
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  </>
);
}

export default App;