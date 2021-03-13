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
    this.factorial = this.factorial.bind(this)
    this.fact = this.fact.bind(this)
  }
  
  squareRoot = (event) => {
    const y = document.getElementById('number').value
    const temp = Math.sqrt(y)
    this.setState({
      x : y,
      answer:temp
    })
  }

  factorial = (a) => {
      let ans=1;
      for(let i=1;i<=a;i++){
        ans *= i
      }
      return ans;
  }

  fact = (event) => {
      const y = document.getElementById('number').value
      const temp = this.factorial(y)
      this.setState({
        x:y,
        answer:temp
      })
  }

  render(){
    return (
      <div className="App">
        <input type="number" id="number" placeholder="Enter a Number"></input>
        <Calculator 
        onclick = {this.squareRoot} 
        value = {this.state.answer}
        facto = {this.fact} />
      </div>
    )
  }
 
}

export default App;
