import { useState } from 'react'
import Greeting from './components/Greeting'
import React from 'react'

  
function Calculate() {
let myarray = React.useState(5); 
let result = myarray[0];
let setResult = myarray[1];
  
  // ES6 style function, you can also use traditional approach
  const click = () => {
    setResult(Math.random())
  };

  return (
    <div>
      <button onClick={click}>Calculate</button>
      <p>Result = {result}</p>
    </div>
  );
}


export default Calculate
