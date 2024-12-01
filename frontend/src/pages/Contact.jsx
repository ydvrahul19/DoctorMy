import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import Map from '../components/Map'
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle, FiSend } from 'react-icons/fi'

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Get in Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Need to schedule an appointment? 
              Our team is here to help you 24/7.
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: FiPhone, title: "Phone", info: "+91 987654123", color: "blue" },
              { icon: FiMail, title: "Email", info: "doctormy@gmail.com", color: "green" },
              { icon: FiMapPin, title: "Location", info: "Viman Nagar, Pune", color: "purple" },
              { icon: FiClock, title: "Working Hours", info: "24/7 Available", color: "red" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}>
                  <item.icon className={`text-${item.color}-500 text-xl`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="form-group"
                    >
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="form-group"
                    >
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="form-group"
                  >
                    <label className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      required
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="form-group"
                  >
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      required
                    ></textarea>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2
                      ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <FiSend className="ml-2" />}
                  </motion.button>
                  
                  {/* Success/Error Message */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-4 rounded-lg ${
                        submitStatus === 'success' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {submitStatus === 'success' 
                        ? 'Message sent successfully!' 
                        : 'Error sending message. Please try again.'}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
                <Map />
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-2">DoctorMy Headquarters</h3>
                  <p className="text-gray-600">
                    19A Pune, Block 49, Viman Nagar,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Have More Questions?</h2>
            <p className="text-gray-600 mb-6">
              Check out our FAQ section or reach out to our support team
            </p>
            <motion.button
              onClick={() => navigate('/faq')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiMessageCircle className="mr-2" />
              View FAQs
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact