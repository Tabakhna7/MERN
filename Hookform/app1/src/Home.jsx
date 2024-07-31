import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName ,setFirstname] = useState("");
    const [lastName ,setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName,lastName, email, password,confirmPassword };
        console.log("Welcome", newUser);
      setFirstname("");
    	setLastname("");
    	setEmail("");
    	setPassword("");
      setConfirmPassword("");
      
    };
    
    return(
      <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            <input type="submit" value="Create User" />
            </div>
        </form>
        <div>
            <p>First name is :{firstName} </p>
            <p>Last name is : {lastName}</p>
            <p>Email is :{email} </p>
            <p>Password is : {password} </p>
            <p>Confirm Password is : {confirmPassword}</p>
        </div>
        </>
        );
};
    
export default UserForm;