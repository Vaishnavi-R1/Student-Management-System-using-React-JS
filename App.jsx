import React from 'react'
import Nav from './Components/Nav'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import AddStudent from './Pages/AddStudent'
import UpdateStudent from './Pages/UpdateStudent'
import ViewStudent from './Pages/ViewStudent'

const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/viewstudent' element={<ViewStudent/>}/>
        <Route path='/updatestudent/:id' element={<UpdateStudent/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App