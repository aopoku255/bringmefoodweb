import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Rider from '../pages/Rider'
import Vendor from '../pages/Vendor'
import TermsAndConditions from '../pages/TermsAndConditions'
import PrivacyPolicy from '../pages/PrivacyPolicy'

const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/rider' element={<Rider/>}/>
        <Route  path='/vendor' element={<Vendor/>}/>
        <Route  path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        <Route  path='/privacy-policy' element={<PrivacyPolicy/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default Router