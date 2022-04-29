import React, { useState } from 'react'

const ListOfStudents = (
    props
    ) => {
    
    const onDeleteStudent = (event, index) => {
        event.preventDefault();
        props.setList(props.list.filter((student, i) => i !== index));
    }
   
    return (
        <div>
            <h1>List of students</h1>
            
                {props.list.map((student, index) => <div key={index}>
                    <h2>
                        {student.name} {student.lastName}  {" "}
                        <button class= "deletebtn" onClick={(event) => onDeleteStudent(event, index)}>X</button>
                    </h2>
                    
                </div>)}

        </div>
    )
}

export default ListOfStudents