import { useState } from "react";

export default function RegisterPage(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(e){

    e.preventDefault();
    await fetch('http://localhost:4001/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'}
    })
  }

  return(
    <form className="register" onSubmit={register}>
      <h1>Sign Up</h1> 
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={e => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}