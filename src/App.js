import React, { Component } from 'react';
import './App.css';
import Calculator from './calculator'

const fs = require('fs');

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      answer: 0
    }

    this.squareRoot = this.squareRoot.bind(this)
    this.factorial = this.factorial.bind(this)
    this.fact = this.fact.bind(this)
    this.naturalLog = this.naturalLog.bind(this)
    this.power = this.power.bind(this)
  }

  squareRoot = (event) => {
    const y = document.getElementById('number').value
    const temp = Math.sqrt(y)
    this.setState({
      x: y,
      answer: temp
    })
    console.log('Square root is clicked.')
  }

  factorial = (a) => {
    console.log(JSON.stringify(fs))
    let ans = 1;
    for (let i = 1; i <= a; i++) {
      ans *= i
    }
    return ans;
  }

  fact = (event) => {
    const y = document.getElementById('number').value
    const temp = this.factorial(y)
    this.setState({
      x: y,
      answer: temp
    })
    console.log('Factorial is clicked.')
  }

  naturalLog = (event) => {
    const y = document.getElementById('number').value
    const temp = Math.log(y)
    this.setState({
      x: y,
      answer: temp
    })
    console.log('Natural log is clicked.')
  }

  power = (event) => {
    const a = document.getElementById('number').value
    const b = document.getElementById('power').value
    const temp = Math.pow(a, b)
    this.setState({
      x: a,
      answer: temp
    })
    console.log('Power is clicked.')
  }

  render() {
    return (
      <div className="App">
        <input type="number" id="number" placeholder="Enter a Number"></input>
        <input type="number" id='power' placeholder='Enter power'></input>
        <Calculator
          onclick={this.squareRoot}
          value={this.state.answer}
          facto={this.fact}
          log={this.naturalLog}
          pow={this.power} />
      </div>
    )
  }

}

export default App;
