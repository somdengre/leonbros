import React from 'react'
import { useState } from 'react';


function Login() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleClick = async () =>{
        try{

            await fetch(` https://http://localhost:7000/signup`,{
    
                method: "POST",
                body: JSON.stringify({userName,email,password}),
                
                
            })
            
        }
        catch(e){
            console.log(e);
        }
    }

  return (

    
    <div className='signup'>
        <div className="sform">
            <h1>Login</h1>
            <form>
              <div className="inputBox">
                <input type="text" value={email} onChange={(e) => {setEmail (e.target.value)}} placeholder="Email"  />
              </div>
              <div className="inputBox" >
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"  />
              </div>
              <div className="inputButton">
                <button type="submit" id="submitbutton" onClick={handleClick}>Sign Up</button>
             </div>
             <div className='stext'>

              <p className="forget" id="signupbutton">
                Don't have an account
                <a href="signup" className="anc" >Sign up</a>
              </p>
             </div>
            </form>
          </div>
    </div>
  )
}

export default Login