import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Signup = () => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();
  function routetoLogin(event){
    navigate('/')
}
  return (
    <div>
        <h3 className='d-flex justify-content-center align-items-center'>SIGN UP PAGE</h3>
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
        <div className='w-25 bg-white rounded p-3'>
        <div>
        <form onSubmit={routetoLogin}>
        <div className='mb-2'>
                    <label htmlFor=""><strong>Username*</strong></label>
                    <input type="text" required placeholder='Enter your User Name' className='form-control' onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className='mb-2'>
                    <label htmlFor=""><strong>Email*</strong></label>
                    <input type="email" required placeholder='Enter your Email' className='form-control' onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-2'>
                    <label htmlFor=""><strong>Password*</strong></label>
                    <input type="password" required placeholder='Enter your Password' className='form-control' onChange={e=>setPassword(e.target.value)}/>
        </div>
        <input required type="checkbox" name="termsandconditions" /><br/>
        <label for="termsandconditions">You are agreeing to our terms & conditions</label>
        <button type="submit" className='btn btn-success mb-3 w-100 rounded-0'>SIGN UP</button><br/>
        <p>Already have an account? Log in!</p>
        <Link to="/" className='btn btn-primary mb-3 w-100 rounded-0 text-decoration-none'>LOG IN</Link>
        </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Signup