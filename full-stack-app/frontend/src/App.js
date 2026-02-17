import './App.css';
import { useState } from 'react';

function App() {

 const [fullName, setFullName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');

 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);
 const [success, setSuccess] = useState(false);

 async function submitHandler(e) {
   e.preventDefault();
   setLoading(true);
   setMessage('');
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   try {
   const response = await fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify({fullName, email, password}),
    headers: {
      'Content-Type':'application/json',
    },
   });
    if (response.ok) {
      setMessage('Successfully registered.')
      setSuccess(true);
      setError(false); 
    } else {
      setSuccess(false);
      setError(true);
       throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error during registration:', error);
    setMessage('Something went wrong. Please try again...')
  } finally {
    setLoading(false);
  }
 }; 
  return (
    <form onSubmit={submitHandler} className="mainContainer">
      <input value={fullName} onChange={(e) => {
        setFullName(e.target.value);
      }} className="fullName" type="text" placeholder='Username'/>

      <input value={email} onChange={(e) => {setEmail(e.target.value)}} 
      className="email" type="email" placeholder='Email'/>

      <input value={password} onChange={(e) => {
        setPassword(e.target.value);
      }} className="password" type="password" placeholder='Password'/>

      <button type="submit" disabled={loading} className="registerBtn">{loading ? 'Loading...' : 'Register'}</button> 
     {success && <p>Registration successful!</p>} 
     {error && <p>Registration failed!</p>}
      <p>{message}</p>
    </form>
  );
}
export default App;
