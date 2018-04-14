import React from 'react'

const validation = (props) => {
    
    const style ={
        paddingTop: "35px",
        textAlign: "center"
    }

    let validationMessage = "Text too Short!"
    if(props.value.length >= 5){
        validationMessage = "Text Long Enough!"
    }
    
    return(
        <div style={style}>
            <input onChange={props.changed} type="text" />
            <p>{props.value}</p>
            <p>{validationMessage}</p>            
        </div>
    )
}

export default validation;