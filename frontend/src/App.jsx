import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './styles/calendar.css'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import FAQ from './pages/FAQ'
import AppointmentConfirmation from './pages/AppointmentConfirmation'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  if (!user?.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#22c55e',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
      <Navbar/>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/privacy' element={<PrivacyPolicy/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<FAQ/>} />
        
        {/* Protected Routes */}
        <Route path='/my-profile' element={
          <ProtectedRoute>
            <MyProfile/>
          </ProtectedRoute>
        } />
        <Route path='/my-appointments' element={
          <ProtectedRoute>
            <MyAppointments/>
          </ProtectedRoute>
        } />
        <Route path='/appointment/:docId' element={
          <ProtectedRoute>
            <Appointment/>
          </ProtectedRoute>
        } />
        <Route path='/appointment-confirmation' element={
          <ProtectedRoute>
            <AppointmentConfirmation/>
          </ProtectedRoute>
        } />

        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App