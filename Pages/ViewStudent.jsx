import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ViewStudent = () => {
  const [students,setStudents]=useState([])
  const navigate=useNavigate()
  const fetchData=()=>{
    axios.get("http://localhost:5000/users")
    .then(res=>setStudents(res.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleUpdate=(id)=>{
    navigate(`/updatestudent/${id}`)
  }

  const handleDelete=(id)=>{
          axios.delete(`http://localhost:5000/users/${id}`)
          .then(()=>{
            fetchData()
          })
          .catch(err=>console.log(err)
          )
        }
  return (
   <>
      <center><h1 style={{paddingTop:"20px"}}>List of Student</h1></center>

      <div className="student-card">
        {students.map((x)=>{
        return <div className='view'>
            <h2>Student Name:{x.name}</h2>
            <p><b>Mail:</b>{x.email}</p>
            <p><b>Phone:</b>{x.phoneno}</p>
            <p><b>Department:</b>{x.department}</p>
            <p><b>Course:</b>{x.course}</p>
            <center><button onClick={()=>{handleUpdate(x.id)}}>Edit</button><span>        </span>
            <button onClick={()=>{handleDelete(x.id)}}>Delete</button></center>
        </div>
      })}
      </div>
   </>
  )
}

export default ViewStudent