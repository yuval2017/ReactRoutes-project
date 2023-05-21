import { Form, redirect, useActionData, useLoaderData, useNavigation } from 'react-router-dom'

import './Login.css'
import { loginUser } from '../api'

//the request is for backend
export async function action( {request} ){
  const formData = await request.formData()
  //the name of the input
  const email = formData.get("email")
  const password = formData.get("password")
  
  const pathName = new URL(request.url).searchParams.get("redirectTo") || '/host'
  console.log(pathName)

    try {
        //the data return tocken or something we can use after
        await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect(pathName)
    } catch(err) {
        return err.message
    }
}
export function loader( {request} ){
  return new URL(request.url).searchParams.get("message")
}
export default function Login(){
  const message = useLoaderData()
  const errorMessage = useActionData()
  const navigation = useNavigation()


  return (
    <div className='login-container'>
      <h1>Sing in to your account</h1>
      {message && <h2 style={{textAlign: 'center', color:'red'}}>{message}</h2>}
      {errorMessage && <h2 style={{textAlign: 'center', color:'red'}}>{errorMessage}</h2>}
      {/* the defual action in the form is action = /login */}
      {/* replace replace the /login with host when we redirect to /host */}
      <Form method='post' className='login-form' replace>
        <div className='input-container'>
          <input name = 'email' type='email' placeholder='Email address'/>
          <input name = 'password' type='password' placeholder='Password'/>
        </div>
        <button disabled = {navigation.state === 'submitting'} 
        className='login-button'>
        {navigation.state === 'submitting'?'Logging in...':'Log in'}</button>
      </Form>
    </div>
  );
}
