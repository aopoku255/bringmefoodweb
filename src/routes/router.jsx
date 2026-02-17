import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Rider from '../pages/Rider'
import Vendor from '../pages/Vendor'

const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/rider' element={<Rider/>}/>
        <Route  path='/vendor' element={<Vendor/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default Router