import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends Component {

  constructor(props) {
    super(props);
    console.log('app.js inside constructor', props);
    this.state = {
      persons: [
        { id: "1", name: 'Max', age: 29 },
        { id: "2", name: 'Danny', age: 31 },
        { id: "3", name: 'Stephen', age: 44 },
      ]
    }
  }

  // Component life cycles
  componentWillMount() {
    console.log('app.js inside componentWillMount()');
  }

  componentDidMount() {
    console.log('app js inside componentDidMount()', );

  }

  // Component Life cycles -- Update  when triggered by internal change -- STATE
  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE App js Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextState, nextProps) {
    console.log('UPDATE App js Inside componentWIllUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE App js Inside componentDidUpdate');
  }

  // new es6 way of setting state can also be set in the constructor
  // state = {
  //   persons: [
  //     { id: "1", name: 'Max', age: 29 },
  //     { id: "2", name: 'Danny', age: 31 },
  //     { id: "3", name: 'Stephen', age: 44 },
  //   ]
  // }

  // method for handling the state of the name
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // creating a a copy object 
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    // es6 syntax
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  // method to hide/show div with persons
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {

    console.log('app js Inside render');


    // variable we out putting in the return
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );


    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>

    );
  }
}

export default App;
