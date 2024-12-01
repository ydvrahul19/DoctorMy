import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { FiEdit2, FiSave, FiCamera } from 'react-icons/fi'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Rahul Yadav",
    image: assets.profile_pic,
    email: 'chinroy@doctormy.com',
    phone: '+91 987654321',
    address: {
      line1: '19A Pune',
      line2: 'Block 49, Viman Nagar, Pune, Maharastra, India'
    },
    gender: 'Male',
    dob: '1998-08-19'
  })

  const [isEdit, setIsEdit] = useState(false)
  const [imageHover, setImageHover] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: '', type: '' })

  const handleSave = () => {
    setIsEdit(false)
    setNotification({ 
      show: true, 
      message: 'Profile updated successfully!', 
      type: 'success' 
    })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' })
    }, 3000)
  }

  const InputField = ({ label, value, onChange, type = "text", options = [] }) => (
    <>
      <p className='font-medium'>{label}:</p>
      {isEdit ? (
        type === "select" ? (
          <motion.select
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='max-w-xs bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={onChange}
            value={value}
          >
            {options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </motion.select>
        ) : (
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='max-w-xs bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type={type}
            value={value}
            onChange={onChange}
          />
        )
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-gray-600'
        >
          {value}
        </motion.p>
      )}
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 my-8 relative'
    >
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-4 right-4 px-4 py-2 rounded-lg text-white ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {notification.message}
        </motion.div>
      )}

      <div className='flex flex-col items-center mb-8'>
        <div 
          className='relative'
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            className='w-32 h-32 rounded-full object-cover border-4 border-blue-100'
            src={userData.image}
            alt={userData.name}
          />
          {isEdit && imageHover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer'
            >
              <FiCamera className='text-white text-2xl' />
            </motion.div>
          )}
        </div>

        {isEdit ? (
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-3xl font-bold text-center mt-4 bg-transparent border-b-2 border-blue-500 focus:outline-none'
            type="text"
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-3xl font-bold text-center mt-4'
          >
            {userData.name}
          </motion.h2>
        )}
      </div>

      <div className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='bg-gray-50 p-6 rounded-xl'
        >
          <h3 className='text-lg font-semibold text-blue-600 mb-4'>Contact Information</h3>
          <div className='grid grid-cols-[1fr_2fr] gap-4'>
            <InputField
              label="Email"
              value={userData.email}
              onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}
              type="email"
            />
            <InputField
              label="Phone"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
            <p className='font-medium'>Address:</p>
            <div className='space-y-2'>
              {isEdit ? (
                <>
                  <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={userData.address.line1}
                    onChange={e => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }))}
                  />
                  <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={userData.address.line2}
                    onChange={e => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }))}
                  />
                </>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='text-gray-600'
                >
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className='bg-gray-50 p-6 rounded-xl'
        >
          <h3 className='text-lg font-semibold text-blue-600 mb-4'>Basic Information</h3>
          <div className='grid grid-cols-[1fr_2fr] gap-4'>
            <InputField
              label="Gender"
              value={userData.gender}
              onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
              type="select"
              options={['Male', 'Female', 'Other']}
            />
            <InputField
              label="Birthday"
              value={userData.dob}
              onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              type="date"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mt-8 flex justify-center'
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors ${
            isEdit ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={isEdit ? handleSave : () => setIsEdit(true)}
        >
          {isEdit ? (
            <>
              <FiSave className="text-lg" />
              Save Changes
            </>
          ) : (
            <>
              <FiEdit2 className="text-lg" />
              Edit Profile
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default MyProfile