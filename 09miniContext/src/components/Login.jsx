import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    // setting context Api
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // set username and pass to context
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        type="text" />
        {" "}
        <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login