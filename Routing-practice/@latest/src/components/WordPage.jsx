import React from 'react'
import { useParams } from 'react-router-dom'

function WordPage() {
    const {word}=useParams();
  return (
    <h1>this is a word : {word}</h1>
  )
}

export default WordPage