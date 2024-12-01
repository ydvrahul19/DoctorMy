import React, { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { FiMapPin, FiClock } from 'react-icons/fi'
import BookingModal from '../components/BookingModal'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { doctors } = useContext(AppContext);

  // Get unique specialties from actual doctor data
  const specialties = ['All', ...new Set(doctors?.map(doc => doc.speciality) || [])];

  // Filter doctors based on search and specialty
  const filteredDoctors = doctors?.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.speciality === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  }) || [];

  // Handle scroll behavior on mount
  useEffect(() => {
    // Check if we have a hash in the URL (e.g., #doctors-list)
    if (location.hash) {
      // Find the element with the matching ID
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  const DoctorCard = ({ doctor }) => {
    const handleBooking = () => {
      setSelectedDoctor(doctor);
      setIsBookingModalOpen(true);
    };

    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.speciality}</p>
            </div>
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center text-gray-600 mb-2">
              <FiMapPin className="mr-2" />
              {doctor.location}
            </div>
            <div className="flex items-center text-gray-600">
              <FiClock className="mr-2" />
              Available Today
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBooking}
            className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Find Your Perfect Doctor
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Choose from our network of qualified healthcare professionals
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Specialty Filter */}
      <div id="doctors-list" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {specialties.map((specialty) => (
            <motion.button
              key={specialty}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedSpecialty === specialty
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {specialty}
            </motion.button>
          ))}
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {filteredDoctors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">No doctors found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedDoctor(null);
        }}
        doctor={selectedDoctor}
      />
    </div>
  )
}

export default Doctors