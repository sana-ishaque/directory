import React from 'react'
import PropTypes from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import './PersonEdit.css'

export default function PersonEdit(props) {
    return (
        <div className="PersonEdit">
            <Card.Body  >
                <input value={props.person.name} />
                <input value={props.person.age} />
                <textarea>{props.person.description}</textarea>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="light"> <FontAwesomeIcon icon={faCheck} /></Button>
                    <Button variant="light"><FontAwesomeIcon icon={faTrashAlt} /></Button>
                </ButtonGroup>
            </Card.Body>
        </div>
    )
}

PersonEdit.prototypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    description: PropTypes.string
}