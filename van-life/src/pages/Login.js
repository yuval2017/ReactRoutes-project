import './Login.css'
import { useState } from 'react'
export default function Login(){
  const [loginFormData, setLoginFromData] = useState({email: "", password: ""})
  function handleSubmit(e){
    e.preventDefualt()
  }
  function handleChange(e){
    const {name, value} = e.target
    console.log(value)
    setLoginFromData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='login-container'>
      <h1>Sing in to your account</h1>
      <div className='login'>
        
        <form onSubmit={handleSubmit} className='login-form'>
        <div className='input-container'>
          <input name = 'email' onChange={handleChange} type='email' placeholder='Email address' value={loginFormData.email}/>
          <input name = 'password' onChange={handleChange} type='password' placeholder='Password' value={loginFormData.password}/>
        </div>
        <button className='login-button'>Log in</button>
        </form>
      </div>
    </div>
  );
}
