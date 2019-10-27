import React from 'react'
import PropTypes from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import './PersonInfo.css'


export default function PersonInfo(props) {
    return (
        <div className="PersonInfo">
            <Card.Body >
                <Card.Title>{props.person.name} , {props.person.age}</Card.Title>
                <Card.Text>
                    {props.person.description}
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="light" onClick={enableEdit}> <FontAwesomeIcon className="text-info" icon={faCheck} /></Button>
                    <Button variant="light"><FontAwesomeIcon className="text-danger" icon={faTrashAlt} /></Button>
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

