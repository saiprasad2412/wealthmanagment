import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom"
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ViewReport from './pages/ViewReport'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProtectedRoutes><Homepage/></ProtectedRoutes>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/view-reports' element={<ViewReport/>}/>



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