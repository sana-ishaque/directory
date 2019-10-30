import React, { Component } from 'react'
import Person from './Person/Person'
import Card from 'react-bootstrap/Card'
// import { stat } from 'fs';


export default class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personsData: [
                {
                    "id": 1,
                    "name": "Rizwan Noor",
                    "age": 35,
                    "description": "Fitness Instructor at Gravity",
                    "isEdit": false
                },
                {
                    "id": 2,
                    "name": "Gemma Stafford",
                    "age": 31,
                    "description": "Chef & Baking Expert",
                    "isEdit": false
                },
                {
                    "id": 3,
                    "name": "Tati Westbrook",
                    "age": 37,
                    "description": "Make-Up Artist",
                    "isEdit": false
                }
            ]
        }
    }

    enableEdit = (person) => {
        this.setState({
            personsData: this.state.personsData.map(mappedPerson => {
                if (mappedPerson.name === person.name) {
                    mappedPerson.isEdit = true;
                }
                return mappedPerson;
            })
        })
    };

    deletePerson = (index) => {
        const persons = [...this.state.personsData];
        persons.splice(index, 1);
        this.setState({personsData: persons})

    }

    render() {
        return (
            <div className="Persons">
                <Card >
                    {this.state.personsData.map((person, index) => <Person
                        person={person}
                        key={person.id}
                        anotherProp={() => this.enableEdit(person)}
                        delete={() => this.deletePerson(index)}
                    />)}
                </Card>
            </div>
        )
    }
}
