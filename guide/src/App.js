import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Danny', age: 31 },
      { name: 'Stephen', age: 44 },
    ]
  }

    // method changing the sate or "setState"
    switchNameHandler = (newName) => {
      //  DO NOT DO THIS => this.state.persons[0].name = "";
      this.setState({
        persons: [
          { name: newName, age: 29 },
          { name: 'Danny', age: 31 },
          { name: 'Stephen', age: 27 },
        ]
      })
    }

    nameChangedHandler = (event) =>{
      this.setState({
        persons: [
          { name: 'Max', age: 29 },
          { name: event.target.value, age: 31 },
          { name: 'Stephen', age: 50 },
        ]
      })
    }

  render() {

    // another way to style components not in a style sheet 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>I am a react App</h1>
        <p>Really working! </p>
        <button 
        style={style}
        onClick={ () => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}  
          > My hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
