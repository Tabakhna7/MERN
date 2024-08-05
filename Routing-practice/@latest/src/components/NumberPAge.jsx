import React from 'react';
import { useParams } from 'react-router-dom';

function NumberPAge() {
    const {number}=useParams();
  
  return (
   !isNaN(number)?
    <h1>hello this is a number :{number}</h1>:
    <h1>hello this is a word :{number}</h1>
  )
}

export default NumberPAge