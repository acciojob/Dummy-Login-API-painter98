//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState } from 'react';
import Data from './Data.js';

const App = ()=>{
    let [email,setEmail] = useState('');
    let [pass,setPass] = useState('');
    let [message,setMessage] = useState('');

    let logIn = () => {
        console.log('inside login')

        setTimeout(()=>{
           try{
            if(email==='' || pass===''){
                setMessage('Enter the UserName and Password');
            }
            else if(!Data.find(item=>item.email===email)){
                setMessage('User not found')
            } 
            else if(!Data.find(item=>item.password===pass)){
                setMessage('Password Incorrect');
            }
            else {
                console.log(Data);
            }
           }
           catch(error){
                console.log(error)
           }
    },3000);
    }

    return (
        <div id='App'>
            <form onClick={e=>e.preventDefault()}>
                <label htmlFor='input-email'>Email</label>
                <input id='input-email' onChange={e=>setEmail(e.target.value)} type='email' value={email}/>
                <p id='user-error'>{!Data.find(item=>item.email===email) && email!==''?message:''}</p>
                <br/>
                <br/>
                <label htmlFor='input-password'>Password</label>
                <input id='input-password' onChange={e=>setPass(e.target.value)} type='password' value={pass}/>
                <p>{!Data.find(item=>item.password===pass) && pass!==''?message:''}</p>
                <br/>
                <br/>
                <button id='submit-form-btn' onClick={logIn}>Submit</button>
                <p id='password-error'>{email==='' && pass==='' ?message:''}</p>
            </form>
        </div>
    )
}
export default App;
