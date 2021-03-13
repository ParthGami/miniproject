import React from 'react'

const calculator = (props) => {
    
    // function squareRoot(){
    //     const a = props.value
    //     const b = Math.sqrt(a)
    //     document.getElementById('sr').value = b
    // }

    return(
        <div>
            <input id='sr' name='sr' value={props.value}></input>
            <button type='button' onClick={ (event) => { props.onclick(event)}}>Square root</button>
        </div>
    )
}

export default calculator