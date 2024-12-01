import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const policies = [
    {
      title: "Information We Collect",
      icon: "",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Medical history and health records",
        "Appointment and booking details",
        "Device and usage information"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: "",
      content: [
        "To provide and maintain our healthcare services",
        "To notify you about changes to our services",
        "To allow you to participate in interactive features",
        "To provide customer support and care"
      ]
    },
    {
      title: "Information Security",
      icon: "",
      content: [
        "End-to-end encryption for sensitive data",
        "Regular security audits and updates",
        "Strict access controls and authentication",
        "Compliance with healthcare data protection standards"
      ]
    },
    {
      title: "Your Rights",
      icon: "",
      content: [
        "Right to access your personal data",
        "Right to correct inaccurate information",
        "Right to delete your account",
        "Right to withdraw consent"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl opacity-90"
          >
            Your privacy is our top priority. Learn how we protect your data.
          </motion.p>
        </div>
      </motion.div>

      {/* Last Updated Section */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-center"
        >
          Last updated: June 2023
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`p-8 ${index !== policies.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{policy.icon}</span>
                <h2 className="text-2xl font-semibold text-gray-800">{policy.title}</h2>
              </div>
              <ul className="space-y-3 text-gray-600 ml-14">
                {policy.content.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + itemIndex * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div 
        data-aos="fade-up"
        className="max-w-4xl mx-auto px-4 py-12 text-center"
      >
        <div className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Have Questions About Your Privacy?
          </h2>
          <p className="text-gray-600 mb-6">
            Our dedicated privacy team is here to help you understand how we protect your data
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all"
          >
            Contact Privacy Team
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
        <p>
          This privacy policy is effective as of June 2023 and will remain in effect except with respect to any changes in its provisions in the future.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
