import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('persons js inside constructor', props);
    }

    // Component Life cycles 
    componentWillMount() {
        console.log('persons js inside componentWillMount()');
    }

    componentDidMount() {
        console.log('persons js inside componentDidMount()', );

    }

    // Component Life cycles -- Update  
    componentWillReceiveProps(nextProps){
        console.log('UPDATE persons js Inside componentWillReceiveProps', nextProps );
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('UPDATE persons js Inside shouldComponentUpdate', nextProps, nextState );
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextState, nextProps){
        console.log('UPDATE persons js Inside componentWIllUpdate', nextProps, nextState );
    }

    componentDidUpdate(){
        console.log('UPDATE persons js Inside componentDidUpdate');        
    }
    
    render () {
        console.log('persons js inside render' );
        
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
            } );
    }
}

    export default Persons;