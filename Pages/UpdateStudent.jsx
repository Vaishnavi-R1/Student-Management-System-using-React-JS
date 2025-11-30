import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'


const UpdateStudent = () => {
      const [name,setName]=useState("")
      const [email,setEmail]=useState("")
      const [phoneno,setPhoneno]=useState("")
      const [department,setDepartment]=useState("")
      const [course,setCourse]=useState("")
      const {id}=useParams()
      useEffect(()=>{
          axios.get(`http://localhost:5000/users/${id}`)
          .then(res=>{
            setName(res.data.name)
            setEmail(res.data.email)
            setPhoneno(res.data.phoneno)
            setDepartment(res.data.department)
            setCourse(res.data.course)
          })
      },[id])
      const navigate=useNavigate()

      const handleUpdate=(e)=>{
        e.preventDefault()
        const data={name,email,phoneno,department,course}
        axios.put(`http://localhost:5000/users/${id}`,data)
        .then(()=>{
          navigate("/viewstudent")
        })
        .catch(err=>console.log(err)
        )
      }
      
  return (
    <>
      <div className="add">
     <center>
        <h2 className='head'>UPDATE STUDENT</h2>
    </center>
    <center>

        <form action="" onSubmit={handleUpdate}>
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
        
        <button>UPDATE</button>
    </form>
    </center>
   </div>

    </>
  )
}

export default UpdateStudent