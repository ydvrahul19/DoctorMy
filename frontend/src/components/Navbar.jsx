import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [token, setToken] = useState(true); // Simulating auth state

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <img className="h-10 w-auto" src={assets.logo} alt="DoctorMy Logo" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(item.path)}
                  className={`text-base font-medium cursor-pointer transition-colors relative ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* User Menu / Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {token ? (
                <div className="relative group">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <img className="w-8 h-8 rounded-full object-cover" src={assets.profile_pic} alt="" />
                    <img className="w-4 h-4 opacity-60" src={assets.dropdown_icon} alt="" />
                  </motion.div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => navigate('/my-profile')}
                      className="px-4 py-2 text-gray-700 hover:text-primary cursor-pointer"
                    >
                      My Profile
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => navigate('/my-appointments')}
                      className="px-4 py-2 text-gray-700 hover:text-primary cursor-pointer"
                    >
                      My Appointments
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => setToken(false)}
                      className="px-4 py-2 text-gray-700 hover:text-primary cursor-pointer"
                    >
                      Logout
                    </motion.div>
                  </div>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/login')}
                  className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Create Account
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0
                  }}
                  className="w-full h-0.5 bg-gray-600 transform origin-left transition-all"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? -20 : 0
                  }}
                  className="w-full h-0.5 bg-gray-600 transition-all"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0
                  }}
                  className="w-full h-0.5 bg-gray-600 transform origin-left transition-all"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-3 bg-white">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    whileHover={{ x: 4 }}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block py-2 text-base font-medium cursor-pointer ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {token ? (
                  <div className="pt-4 space-y-3">
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        navigate('/my-profile');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-2 text-base font-medium text-gray-600 cursor-pointer"
                    >
                      My Profile
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        navigate('/my-appointments');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-2 text-base font-medium text-gray-600 cursor-pointer"
                    >
                      My Appointments
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        setToken(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-2 text-base font-medium text-gray-600 cursor-pointer"
                    >
                      Logout
                    </motion.div>
                  </div>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      navigate('/login');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full mt-4 bg-primary text-white py-2 rounded-full font-medium"
                  >
                    Create Account
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Navbar