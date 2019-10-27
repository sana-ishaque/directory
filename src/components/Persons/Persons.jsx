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
                    "name": "Rizwan Noor",
                    "age": 35,
                    "description": "Fitness Instructor at Gravity",
                    "isEdit": false
                },
                {
                    "name": "Gemma Stafford",
                    "age": 31,
                    "description": "Chef & Baking Expert",
                    "isEdit": false
                },
                {
                    "name": "Tati Westbrook",
                    "age": 37,
                    "description": "Make-Up Artist",
                    "isEdit": false
                }
            ]
        }
    }
    enableEditHandler = () => {
        // const persons = [...this.state.personsData];
        // this.setState({ persons.isEdit : true})
        this.setState({ isEdit: true })
    };

    render() {
        return (
            <div className="Persons">
                <Card >
                    {this.state.personsData.map(person => <Person
                        person={person}
                        key={Date.now()}
                        click={this.enableEditHandler}
                    />)}
                </Card>
            </div>
        )
    }
}
