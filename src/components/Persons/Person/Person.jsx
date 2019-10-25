import React from 'react'
import PersonInfo from './PersonInfo/PersonInfo'
// import Persons from '../Persons'
import PropTypes from 'prop-types';
import PersonEdit from './PersonEdit/PersonEdit';
// import { Card, Button, ButtonGroup } from 'react-bootstrap'





export default function Person(props) {
    return (
        <div className="Person">
            <PersonInfo person={props.person} />
            <PersonEdit  person={props.person}/>

        </div>
    )
}

Person.prototypes = {
    person: PropTypes.object
}

