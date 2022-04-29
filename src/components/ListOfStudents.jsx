import React, { useState } from 'react'

const ListOfStudents = () => {

    const onDeleteStudent = (event) => {
        event.preventDefault();
        if (name && lastName) {
            const student = {
                name,
                lastName
            }
            setList([...list, student])
        }
    }

    const [list, setList] = useState([])

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

   

    return (
        <div>
            <h1>List of students</h1>
            
                {list.map((student, index) => <div key={index}>
                    <h2>{student.name}</h2>
                    <h2>{student.lastName}</h2>
                </div>)}
           
        </div>
    )
}

export default ListOfStudents