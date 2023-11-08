import { useState } from 'react'
import Greeting from './components/Greeting'
import React from 'react'

  
function Calculate() {
let myarray = React.useState(); 
let result = myarray[1];
let setResult = myarray[2];
  
  return (
    <div>
      <input type="number" name="number1" onChange={
function Calculate() {
  let [n1, setN1] = React.useState(0);
  let [n2, setN2] = React.useState(0);

  return (
    <>
      <h1>Calculator</h1>
      {n1 + n2}
      <br />
      <input
        type="number"
        name="number2"
        onChange={(e) => setN1(Number(e.target.value))}
      />
      <input
        type="number"
        name="number2"
        onChange={(e) => setN2(Number(e.target.value))}
      />
    </>
  );
}} />
      <p>Result = {result}</p>
    </div>
  );
}


export default Calculate
