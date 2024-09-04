import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoList } from './components/ToDoList'

function App() {
  
//   const [toDo, setToDo] = useState([
//     { id: 1, name: "Task1", description: "This is my task one", done: false },
//     { id: 2, name: "Task2", description: "This is my task two", done: false },
//     { id: 3, name: "Task3", description: "This is my task three", done: false },
//     { id: 4, name: "Task4", description: "This is my task four", done: false },
//     { id: 5, name: "Task5", description: "This is my task five", done: false },
// ])

  return (
    <>
      <ToDoList />
    </>
  )
}

export default App
