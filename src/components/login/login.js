import React, { useState } from 'react';
import './login.css';
import { loginUser } from '../../API/login';


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();       
        await loginUser(email, password);      
    }

  return(
    <div className="login-wrapper">
    <h1>התחברות</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>שם משתמש</p>
        <input onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>      
      </label>
      <label>
        <p>סיסמא</p>
        <input onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>      
      </label>
      <div>
        <button type="submit">התחברות</button>
      </div>
    </form>
    </div>
  )
}
