import React from 'react'
import { assets, doctors } from '../assets/assets'
import { Link } from 'react-router-dom'

const About = () => {
  // Find Dr. Priya Sharma and Dr. Amit Patel from the doctors array
  const drPriya = doctors.find(doc => doc.name === 'Dr. Priya Sharma');
  const drAmit = doctors.find(doc => doc.name === 'Dr. Amit Patel');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>About Us</h1>
        <p className='text-xl text-gray-600'>Providing Quality Healthcare Services</p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-2xl shadow-lg' src={assets.about_image} alt="About DoctorMy" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className="text-lg">At DoctorMy, we're committed to making healthcare accessible and convenient for everyone. Our platform connects you with experienced healthcare professionals who are dedicated to providing the best possible care.</p>
          <p className="text-lg">We believe in a patient-first approach, ensuring that you have access to quality healthcare when and where you need it.</p>
          <div className="mt-4">
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Our Vision</h2>
            <p className="text-lg">To revolutionize healthcare accessibility by creating a seamless connection between patients and healthcare providers, making quality medical care available to all.</p>
          </div>
        </div>
      </div>

      {/* Featured Doctors Section */}
      <div className='my-20'>
        <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>Our Featured Doctors</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Dr. Priya Sharma */}
          <div className='flex flex-col md:flex-row gap-6 items-center bg-white rounded-2xl shadow-lg p-6'>
            <img 
              src={drPriya?.image} 
              alt="Dr. Priya Sharma" 
              className='w-48 h-48 rounded-full object-cover shadow-md'
            />
            <div>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>{drPriya?.name}</h3>
              <p className='text-blue-600 font-medium mb-2'>{drPriya?.speciality}</p>
              <p className='text-gray-600'>{drPriya?.about}</p>
            </div>
          </div>

          {/* Dr. Amit Patel */}
          <div className='flex flex-col md:flex-row gap-6 items-center bg-white rounded-2xl shadow-lg p-6'>
            <img 
              src={drAmit?.image} 
              alt="Dr. Amit Patel" 
              className='w-48 h-48 rounded-full object-cover shadow-md'
            />
            <div>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>{drAmit?.name}</h3>
              <p className='text-blue-600 font-medium mb-2'>{drAmit?.speciality}</p>
              <p className='text-gray-600'>{drAmit?.about}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-3xl font-bold text-gray-800 mb-12 text-center'>
        <h2>Why Choose Us</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
        <div className='border rounded-xl px-8 py-10 hover:bg-blue-600 hover:text-white transition-all duration-300 group'>
          <h3 className='text-xl font-bold mb-4 group-hover:text-white text-gray-800'>Efficiency</h3>
          <p className='text-gray-600 group-hover:text-white'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border rounded-xl px-8 py-10 hover:bg-blue-600 hover:text-white transition-all duration-300 group'>
          <h3 className='text-xl font-bold mb-4 group-hover:text-white text-gray-800'>Convenience</h3>
          <p className='text-gray-600 group-hover:text-white'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border rounded-xl px-8 py-10 hover:bg-blue-600 hover:text-white transition-all duration-300 group'>
          <h3 className='text-xl font-bold mb-4 group-hover:text-white text-gray-800'>Personalization</h3>
          <p className='text-gray-600 group-hover:text-white'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

      <div className='text-center'>
        <Link
          to="/doctors#doctors-list"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors text-lg"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  )
}

export default About