import React from 'react'
import PersonInfo from './PersonInfo/PersonInfo'
// import Persons from '../Persons'
import PropTypes from 'prop-types';
import PersonEdit from './PersonEdit/PersonEdit';
import { Card } from 'react-bootstrap'

export default function Person(props) {
    return (
        <Card style={{ width: '25rem' }}>
            {props.person.isEdit ? <PersonEdit person={props.person} /> : <PersonInfo person={props.person} />}
        </Card>
    )
}

Person.prototypes = {
    person: PropTypes.object
}

