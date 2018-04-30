import React, { Component } from 'react';
import classes from'./App.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary.js/ErrorBoundary";

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

    // binding css variable 
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div >
      );

      btnClass = classes.Red;
    }

    // dynamically adding and assigning classes
    const assignClasses = []
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold); // classes = ['red', 'bold']
    }


    return (
        <div className={classes.App}>
          <h1>I am a react App</h1>
        <p className={assignClasses.join(' ')}>Really working! </p>
          <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      
    );
  }
}

export default App;
