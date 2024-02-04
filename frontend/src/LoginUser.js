import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const LoginUser = () => {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    username:'',
    password:''
  })
const handleInput=(event)=>{
  setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
}

  const [errors,setErrors]=useState({})

  const handlelogin=(event)=>{
    event.preventDefault();
    navigate('/create');
  }
  return (
    <div>
        <h3 className='d-flex justify-content-center align-items-center'>LOGIN PAGE</h3>
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
        <div className='w-25 bg-white rounded p-3'>
        <div>
        <form onSubmit={handlelogin}>
        <div className='mb-2'>
                    <label htmlFor="username"><strong>Username*</strong></label>
                    <input name='username' type="text" required placeholder='Enter your User Name' className='form-control rounded-0' onChange={handleInput}/>
        </div>
        <div className='mb-2'>
                    <label htmlFor="password"><strong>Password*</strong></label>
                    <input name='password' type="password" required placeholder='Enter your Password' className='form-control rounded-0' onChange={handleInput}/>
        </div>
        <input required type="checkbox" name="termsandconditions" /><br/>
        <label for="termsandconditions">You are agreeing to our terms & conditions</label>
        <button type="submit" className='btn btn-success mb-3 w-100 rounded-0'>LOGIN</button><br/>
        <p>Don't have an account? Sign up!</p>
        <Link to="/Signup" className='btn btn-primary mb-3 w-100 rounded-0 text-decoration-none'>CREATE ACCOUNT</Link>
        </form>
        </div>
        </div>
    </div>
    </div>
    
  )
}
export default LoginUser