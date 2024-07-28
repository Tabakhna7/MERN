import React from 'react'

export default function Card(props) {
   const {firstname,age,hairColor}=props
  return (

   
    <div>
        <h1>Name : {firstname}</h1>
        <p>Age : {age} </p>
        <p>Hair-color:{hairColor} </p>
    </div>
  )
}
