import React, { useState } from 'react'
import ListOfStudents from './ListOfStudents'

const FormOfStudents = () => {

  const onAddStudent = (event) => {
    event.preventDefault();
    if(name && lastName){
      const student = {
        name,
        lastName
      }
      setList([...list, student])
      document.getElementById("student-form").reset();
      setName("")
      setLastName("")
    } 
  }

  const [list, setList] = useState([])

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const addName = (event)=>{
    setName(event.target.value)
  }

 const addLastName = (event) => {
    setLastName(event.target.value)
 }


  return (
    <div>
      <h1>Add a student</h1>
      <form id="student-form">
        <label>Name</label>
        <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName}  type="text" name="lastName" />
        <button onClick={onAddStudent}>add student</button>
        <ListOfStudents list={list} setList={setList}/> 
      </form>
    </div>
  )
}

export default FormOfStudents
