import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ------Left Section------ */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>DoctorMy is Pune's leading healthcare platform, connecting patients with expert doctors across multiple specialties. We're committed to making quality healthcare accessible, convenient, and personalized for every patient.</p>

            </div>
             {/* ------Center Section------ */}
             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <p onClick={() => handleNavigation('/')} className="cursor-pointer hover:text-primary">Home</p>
                    <p onClick={() => handleNavigation('/about')} className="cursor-pointer hover:text-primary">About us</p>
                    <p onClick={() => handleNavigation('/contact')} className="cursor-pointer hover:text-primary">Contact us</p>
                    <p onClick={() => handleNavigation('/privacy')} className="cursor-pointer hover:text-primary">Privacy Policy</p>
                </ul>          
             </div>
          {/* ------Right Section------ */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 987654123</li>
                    <li>doctormy@gmail.com</li>
                </ul>
            </div>

        </div>
        {/* -------CopyRight Text ------------ */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ DoctorMy - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer