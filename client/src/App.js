import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom"
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ViewReport from './pages/ViewReport'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProtectedRoutes><Homepage/></ProtectedRoutes>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/about' element={<About/>}/>

      <Route path='/view-reports' element={<ProtectedRoutes><ViewReport/></ProtectedRoutes>}/>



    </Routes>
    </>
  )
}

export function ProtectedRoutes(props){
  if(localStorage.getItem('user')){
    return props.children
  }else{
    return <Navigate to='/login'/>
  }
  
}

export default App