import React from "react";
import classes from './Person.css';

// function component try to use these as much as possible as to keep a more managable state 
// Outputs one single person 

const person = (props) => {     
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I {props.name}! And i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default person;