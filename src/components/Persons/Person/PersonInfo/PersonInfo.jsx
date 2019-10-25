import React from 'react'
import PropTypes from 'prop-types';
import {Card, Button, ButtonGroup } from 'react-bootstrap'

export default function PersonInfo(props) {
    return (
        <div>
            <Card.Body>
                <Card.Title>{props.person.name} , {props.person.age}</Card.Title>
                <Card.Text>
                    {props.person.description}
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="light">Edit</Button>
                    <Button variant="light">Delete</Button>
                </ButtonGroup>

            </Card.Body>
        </div>
    )
}
PersonInfo.prototypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    description: PropTypes.string
}

