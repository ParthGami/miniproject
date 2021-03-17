import React, { Component } from 'react'
import fs from "fs"

console.log(JSON.stringify(fs))

class calculator extends Component {


    componentDidMount(){
        console.log('[Calculator.js] componentDidMount.')
        //fs.writeFile('./log.txt','[Calculator.js] componentDidMount.')
    }

    UNSAFE_componentWillReceiveProps(){
        console.log('[calculator.js] componentWillReceiveProps.')
    }

    shouldComponentUpdate(nextprops,nextState){
        console.log('[calculator.js] shouldComponentUpdate')
        if(nextprops.value !== this.props.value){
            return true
        }
        else {
            return false
        }
    }

    componentDidUpdate(){
        console.log('[calculator.js] componentDidUpdate')
    }

    render(){

        console.log('[calculator.js] rendering....')

        return(
            <div>
                <input id='sr' name='sr' value={this.props.value}></input>
                <button type='button' onClick={ (event) => {this.props.onclick(event)}}>Square root</button>
                <button type='button' onClick = {(event) => {this.props.facto(event)}}>Factorial</button>
                <button type='button' onClick = {(event) => {this.props.log(event)}}>Natural log</button>
                <button type='button' onClick = {(event) => {this.props.pow(event)}}>Power</button>
            </div>
        )
    }
    
}

export default calculator