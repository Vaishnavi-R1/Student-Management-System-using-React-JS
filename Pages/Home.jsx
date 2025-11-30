import React from 'react'
import "../Styles/Global.css"
const Home = () => {
  return (
    <div className="home-container">
      {/* NAVBAR */}
     

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Student <br></br>Management System</h1>
          <p>
            Manage students, courses, attendance and academic records easily with our 
            powerful and user-friendly system.
          </p>

        </div>

        <div className="hero-img">
          <img 
            src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg" 
            alt="Students" 
          />
        </div>
      </section>
    </div>
  )
}
export default Home