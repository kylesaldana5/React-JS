import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

    // dynamically adding and assigning classes
    const assignClasses = []
    // binding css variable 
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
        }

    if (props.persons.length <= 2) {
        assignClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold); // classes = ['red', 'bold']
    }


    return (
        <div className={classes.Cockpit}>
            <h1>I am a react App</h1>
            <p className={assignClasses.join(' ')}>Really working! </p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
};

export default cockpit