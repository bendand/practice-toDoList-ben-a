import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList'
import Header from './components/Header'

function App() {

  return (
    <>
      <div>
        <Header />
        <ToDoList />
      </div>
    </>
  )
}

export default App
