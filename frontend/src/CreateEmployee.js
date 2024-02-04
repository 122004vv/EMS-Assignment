import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateEmployee() {
    const [name,setName]=useState('')
    const [department,setDepartment]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState('')
    const [address,setAddress]=useState('')
    const [dob,setDob]=useState('')
    const [age,setAge]=useState('')
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{name,department,designation,salary,address,dob,age})
        .then(res=>{
            console.log(res);
            navigate('/tableView');
        }).catch(err=>console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h3>ADD AN EMPLOYEE</h3>
                <div className='mb-2'>
                    <label htmlFor="">Employee Name*</label>
                    <input type="text" required placeholder='Employee name' className='form-control' onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Department*</label>
                    <input type="text" required placeholder='Department' className='form-control' onChange={e=>setDepartment(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Date of Birth*</label>
                    <input type="date" required placeholder='Date of Birth' className='form-control' onChange={e=>setDob(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age*</label>
                    <input type="number" required min="21" placeholder='Age' className='form-control' onChange={e=>setAge(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Designation*</label>
                    <input type="text" required  placeholder='Designation' className='form-control' onChange={e=>setDesignation(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Salary*</label>
                    <input type="number" required min="10000" placeholder='Age' className='form-control' onChange={e=>setSalary(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Address*</label>
                    <input type="text" required placeholder='Address' className='form-control' onChange={e=>setAddress(e.target.value)}/>
                </div>
                <button className='btn btn-success'>CREATE</button>
            </form>
        </div>
    </div>
  )
}

export default CreateEmployee