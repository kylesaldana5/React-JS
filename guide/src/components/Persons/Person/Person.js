import React, {Component} from "react";
import classes from './Person.css';

// function component try to use these as much as possible as to keep a more managable state 
// Outputs one single person 

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('person js inside constructor', props);
    }

    componentWillMount() {
        console.log('person js inside componentWillMount()');
    }

    componentDidMount() {
        console.log('person js inside componentDidMount()', );

    }
    
    render (){
        console.log('person js inside render' );
        
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I {this.props.name}! And i am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} />
            </div>
        )
    }
}     


export default Person;