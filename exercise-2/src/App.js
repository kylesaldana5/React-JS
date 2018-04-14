import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from "./Char/Char";

class App extends Component {

  state = { value: '' }

  // method that will count the number of words in the users input and display them
  countWordsHandler = (event) => {
    this.setState({ value: event.target.value })
  }

  // method to delete a character if clicked on 
  deleteCharMethod = (index) => {
    const text = this.state.value.split('');
    text.splice(index, 1)
    const updateText = text.join('')
    this.setState({value: updateText})
  }


  render() {
    //  use split and map to map a new array of each typed characters in the char component 
    const charList = this.state.value.split('').map((char, index) => {
      return <Char 
      character={char} 
      key={index} 
      clicked={() => this.deleteCharMethod(index)}/>
    })

    return (
      <div>
        <Validation 
        value={this.state.value} 
        changed={this.countWordsHandler} />
        {charList}
      </div>
    );
  }
}


export default App;
