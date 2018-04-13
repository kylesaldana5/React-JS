import React, { Component } from 'react';
import './App.css';
import Output from "./UserOutput/UserOutput";
import Input from "./UserInput/UserInput";

class App extends Component {

  state = {
    name: 'Kyle', 
    band: 'Phish' 
  };


  // event handler method to manipulate sate by typing text into the input field (two way binding)
  switchNameHandler = (event) => {
    this.setState({ name: event.target.value })
  };


  render() {
    return (
      <div>
        <Output
          name={this.state.name}
          band={this.state.band} />
        <Output
          name={this.state.name}
          band={this.state.band} />
        <Input changed={this.switchNameHandler} />
      </div>
    );
  }
};

export default App;
