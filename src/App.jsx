import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FormOfStudents from './components/FormOfStudents'
import ListOfStudents from './components/ListOfStudents'

function App() {

  return (
    <div>
      <h1>My first application</h1>
      <FormOfStudents />
      <ListOfStudents />
    </div>
  )
}

export default App
