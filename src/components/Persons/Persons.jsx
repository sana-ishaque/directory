import React from 'react'
import Person from './Person/Person'
import Card from 'react-bootstrap/Card'


export default function Persons() {
    let personsData = [
        {
            "name": "Rizwan Noor",
            "age": 35,
            "description": "Fitness Instructor at Gravity",
            isEdit: false
        },
        {
            "name": "Gemma Stafford",
            "age": 31,
            "description": "Chef & Baking Expert",
            isEdit: false
        },
        {
            "name": "Tati Westbrook",
            "age": 37,
            "description": "Make-Up Artist",
            isEdit: false
        }
    ]

    let enableEdit = () => { alert('Hi i am your grandParent') };

    return (
        <div className="Persons">
            <Card style={{ width: '18rem' }}>
                {personsData.map(person => <Person
                    person={person}
                    key={Date.now}
                    click={enableEdit}
                />)}
            </Card>
        </div>


    )
}
