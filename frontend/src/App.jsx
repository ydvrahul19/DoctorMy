import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/calendar.css'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import FAQ from './pages/FAQ'
import AppointmentConfirmation from './pages/AppointmentConfirmation'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
     
      <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/doctors' element={ <Doctors/> } />
          <Route path='/doctors/:speciality' element={ <Doctors/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/about' element={ <AboutUs/> } />
          <Route path='/privacy' element={ <PrivacyPolicy/> } />
          <Route path='/contact' element={ <Contact/> } />
          <Route path='/my-profile' element={ <MyProile/> } />
          <Route path='/my-appointments' element={ <MyAppointments/> } />
          <Route path='/appointment/:docId' element={ <Appointment/> } />
          <Route path='/faq' element={ <FAQ/> } />
          <Route path='/appointment-confirmation' element={ <AppointmentConfirmation/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App