import React, { Component } from 'react';
import './App.css';
import Calculator from './calculator'

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
        x : 0,
        answer : 0
    }

    this.squareRoot = this.squareRoot.bind(this)
  }
  
  squareRoot = (event) => {
    const y = document.getElementById('number').value
    const temp = Math.sqrt(y)
    this.setState({
      x : y,
      answer:temp
    })
  }

  render(){
    return (
      <div className="App">
        <input type="number" id="number" placeholder="Enter a Number"></input>
        <Calculator onclick = {this.squareRoot} value={this.state.answer}/>
      </div>
    )
  }
 
}

export default App;
