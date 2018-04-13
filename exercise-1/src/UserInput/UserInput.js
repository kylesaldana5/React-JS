import React from "react";

// component holding the user input 
const userInput = (props) =>{

    // inline styling
    const inputStyle = {
        border: '2px solid red',
        'text-align': 'center'
    };

    return  <input style={inputStyle} type="text" onChange={props.changed}/>
}
export default userInput;