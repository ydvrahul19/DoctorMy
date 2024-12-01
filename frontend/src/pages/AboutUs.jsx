import React, { useEffect } from 'react'
import { assets, doctors } from '../assets/assets'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Find the specific doctors
  const drPriya = doctors.find(doc => doc.name === 'Dr. Priya Sharma');
  const drAmit = doctors.find(doc => doc.name === 'Dr. Amit Patel');

  const teamMembers = [
    { 
      name: 'Dr. Rahul Yadav', 
      role: 'Founder & CEO', 
      image: assets.profile_pic,
      description: 'Leading innovation in healthcare technology'
    },
    { 
      name: 'Dr. Priya Sharma', 
      role: 'Medical Director', 
      image: drPriya?.image,
      description: drPriya?.about
    },
    { 
      name: 'Dr. Amit Patel', 
      role: 'Chief of Operations', 
      image: drAmit?.image,
      description: drAmit?.about
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10"></div>
        <div className="text-center text-white z-10 px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            About DoctorMy
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Revolutionizing healthcare accessibility in Pune through technology and trust
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            data-aos="fade-right"
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At DoctorMy, our mission is to revolutionize healthcare accessibility in Pune by connecting patients with the finest medical professionals. We believe that quality healthcare should be easily accessible to everyone.
            </p>
            <div className="flex gap-4 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-6 rounded-xl flex-1"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Verified Doctors</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-6 rounded-xl flex-1"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">50k+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            data-aos="fade-left"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 transform rotate-3 rounded-2xl"></div>
            <img 
              src={assets.about_image} 
              alt="Healthcare" 
              className="relative z-10 rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              data-aos="fade-up"
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Our Core Values
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', description: 'Partnering with the most qualified healthcare providers', icon: '🏆' },
              { title: 'Patient-Centric', description: 'Designing every feature with patient comfort in mind', icon: '💝' },
              { title: 'Innovation', description: 'Continuously improving healthcare accessibility', icon: '💡' }
            ].map((value, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals leading DoctorMy towards a healthier future
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-72">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        data-aos="fade-up"
        className="bg-gradient-to-r from-blue-600 to-blue-400 py-20 mt-20"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join thousands of satisfied patients who trust DoctorMy for their healthcare needs
          </p>
          <motion.button
            onClick={() => navigate('/doctors')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Book an Appointment
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutUs
