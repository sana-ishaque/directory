import React from 'react'
import PersonInfo from './PersonInfo/PersonInfo'
// import Persons from '../Persons'
import PropTypes from 'prop-types';
import PersonEdit from './PersonEdit/PersonEdit';
import { Card } from 'react-bootstrap'
import './Person.css'

export default function Person(props) {
    console.log(props);

    return (
        <Card className="Person">
            {props.person.isEdit ? <PersonEdit person={props.person} /> : <PersonInfo
                person={props.person}
                click={props.click} />}
        </Card>
    )
}

Person.prototypes = {
    person: PropTypes.object,
    click: PropTypes.func
}

