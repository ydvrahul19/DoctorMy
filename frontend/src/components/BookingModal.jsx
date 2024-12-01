import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import BookingForm from './BookingForm';

const BookingModal = ({ isOpen, onClose, doctor }) => {
  if (!doctor) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <div 
                className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl"
                style={{ maxHeight: '90vh', overflowY: 'visible' }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FiX className="w-6 h-6 text-gray-500" />
                </button>

                {/* Doctor Info Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
                      <p className="text-gray-600">{doctor.speciality}</p>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="booking-form-container" style={{ position: 'relative', zIndex: 1000 }}>
                  <BookingForm
                    doctorId={doctor._id}
                    doctorName={doctor.name}
                    specialty={doctor.speciality}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
