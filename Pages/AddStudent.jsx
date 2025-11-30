import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneno,setPhoneno]=useState("")
    const [department,setDepartment]=useState("")
    const [course,setCourse]=useState("")

    const navigate=useNavigate()
    const handleForm=(e)=>{
        e.preventDefault()
        const data={name,email,phoneno,department,course}
        axios.post("http://localhost:5000/users",data)
        .then(()=>{
            setName("")
            setEmail("")
            setPhoneno("")
            setDepartment("")
            setCourse("")
            navigate("/viewstudent")
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
    
   <div className="add">
     <center>
        <h2 className='head'>ADD STUDENT</h2>
    </center>
    <center>
        <form  onSubmit={handleForm}>
        <label>Name:</label><br />
        <input type='text' placeholder='Enter Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/><br /><br />
        <label>Email:</label><br />
        <input type='text' placeholder='Enter email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
        <label>Phone No:</label><br />
        <input type='text' placeholder='Enter phone number' required value={phoneno} onChange={(e)=>{setPhoneno(e.target.value)}}/><br /><br />
        <label>Department:</label><br />
        <input type='text' placeholder='enter department' required value={department} onChange={(e)=>{setDepartment(e.target.value)}}/><br /><br />
        <label>Course:</label><br />
        <input type='text' placeholder='enter course' required value={course} onChange={(e)=>{setCourse(e.target.value)}}/><br /><br />
        
        <button>Add</button>
    </form>
    </center>
   </div>
    </>
  )
}

export default AddStudent