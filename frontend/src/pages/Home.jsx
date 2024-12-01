import React from 'react'
import Navbar from '../components/Navbar'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import TopDoctorsSection from '../components/TopDoctorsSection'
import HeroSection from '../components/HeroSection'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { assets, doctors } from '../assets/assets'

const Home = () => {
  const navigate = useNavigate();
  
  const featuredDoctors = doctors.slice(0, 6); 

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection/>
      <SpecialityMenu/>
      <TopDoctorsSection/>
      <Banner/>
    </div>
  )
}

export default Home