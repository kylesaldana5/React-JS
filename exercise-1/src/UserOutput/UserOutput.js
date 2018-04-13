import React from "react";
import './UserOutput.css'

// component holding user output
const userOutput = (props) =>{
    return (
        <div className={'UserOutput'}>
            <p>Hi my name is {props.name}</p>
            <p>And i love the {props.band} </p>            
        </div>
    )
}

export default userOutput;