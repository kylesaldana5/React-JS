import React, { Component } from 'react';
import classes from'./App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: 'Max', age: 29 },
      { id: "2", name: 'Danny', age: 31 },
      { id: "3", name: 'Stephen', age: 44 },
    ]
  }

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
