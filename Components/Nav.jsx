import React from 'react'
import "../Styles/Global.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <>
    <div className="nav">
        <div className="left">
            <img className="img" src="https://play-lh.googleusercontent.com/8ZDxwWHQnKPHu3hJDN0whQqz8PDtpH1niWl_s6NIJ1Xitu612zFbYJRif8Dv8wisBg"/>
        </div>
        <div className="right">
            <Link to={"/"}><h1 style={{color:"white"}}>HOME</h1></Link>
            <Link to={"/addstudent"}><h1 style={{color:"white"}}>ADD</h1></Link>
            <Link to={"/viewstudent"}><h1 style={{color:"white"}}>VIEW</h1></Link>
        </div>
    </div>

   </>
  )
}

export default Nav