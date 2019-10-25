import React from 'react'
import Person from './Person/Person'
import Card from 'react-bootstrap/Card'


export default function Persons() {
    const personsData = [
        {
            "name": "Rizwan Noor",
            "age": 35,
            "description": "Fitness Instructor at Gravity"
        },
        {
            "name": "Gemma Stafford",
            "age": 31,
            "description": "Chef & Baking Expert"
        },
        {
            "name": "Tati Westbrook",
            "age": 37,
            "description": "Make-Up Artist"
        }
    ]
    return (
        <div className="Persons">
            <Card style={{ width: '18rem' }}>
                {personsData.map(person => <Person person={person} />)}
            </Card>
        </div>


    )
}
