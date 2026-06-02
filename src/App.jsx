import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Moviedetailes from './pages/Moviedetailes'
import Seatlayout from './pages/Seatlayout'
import Mybooking from './pages/Mybooking'
import Favorite from './pages/Favorite'
import {Toaster} from 'react-hot-toast'
import Footer from './component/Footer'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element ={<Movie/>} />
        <Route path='/movies/:id' element={<Moviedetailes/>} />
        <Route path='/movie/:id/:date' element={<Seatlayout/>}/> 
        <Route path='/mybooking' element={<Mybooking/>} />
        <Route path='/favorite' element={<Favorite/>} />
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App