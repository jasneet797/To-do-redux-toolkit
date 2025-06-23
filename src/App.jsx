import { useState } from 'react'
import './App.css'
import Todos from './components/Todo.jsx'
import AddTodo from './components/AddTodo.jsx'
function App() {

  return (
    <>
      <h2>Redux Practice</h2>   
      <AddTodo/>
      <Todos/>
     
    </>
  )
}

export default App
