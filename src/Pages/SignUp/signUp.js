import React from 'react'
import './signUp.css';
import { useState } from 'react';
import './signUp.css'

function SignUp() {
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
        {/* <div className='heading'>SIGN UP</div>
        <div className='fields'>

         <label for="uemail"><b>Username:</b></label>
         <input type="text" placeholder="Enter username" value={userName} onChange = {(e) => {setUserName (e.target.value)}} name="uemail" required></input>
        </div>
        <div className='fields'> 

         <label for="uemail"><b>Email:</b></label>
         <input type="text" placeholder="Enter Email" value={email} onChange = {(e) => {setEmail (e.target.value)}} name="uemail" required></input>
        </div>
        <div className='fields'> 
         <label for="psw"><b>Password:</b></label>
         <input type="password" placeholder="Enter Password" value={password} onChange={(e) => {setPassword(e.target.value)}} name="psw" required>
         </input>
        </div>

        <button type="submit"  onClick={handleClick}>Sign Up</button>
        <div>Already have an account?</div>
        <a>Login</a> */}

        <div className="sform">
            <h1>SIGN UP</h1>
            <form>
              <div className="inputBox">
                <input type="text" value={email} onChange={(e) => {setEmail (e.target.value)}} placeholder="UserName"  />
              </div>
              <div className="inputBox">
                <input type="text" value={userName} onChange={(e) => {setUserName (e.target.value)}} placeholder="Email" />
              </div>
              <div className="inputBox" >
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"  />
              </div>
              <div className="inputButton">
                <button type="submit" id="submitbutton" onClick={handleClick}>Sign Up</button>
             </div>
             <div className='stext'>

              <p className="forget" id="signupbutton">
                Already have an account
                <a href='login' className="anc" >Login</a>
              </p>
             </div>
            </form>
          </div>
        
    </div>
  )
}

export default SignUp