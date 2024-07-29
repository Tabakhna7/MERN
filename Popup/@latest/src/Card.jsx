import React,{useState} from 'react'

export default function Card(props) {
   const {firstname,age,hairColor}=props;
   const [state,setAge]=useState({
    countAge:age
})
const changeAge=()=>{
    setAge({
        countAge:state.countAge + 1
    });
}
  return (

   
    <div>
        <h1>Name : {firstname}</h1>
        <p>Age : {age} </p>
        <p>Hair-color:{hairColor} </p>
        <button onClick={changeAge}>Click here to change your age</button>
    </div>
  )
}
