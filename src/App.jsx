import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginStatus from './components/LoginStatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        task manager app
      </h1>
      <LoginStatus />
    </>
  )
}

export default App
