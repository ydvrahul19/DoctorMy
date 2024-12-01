import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ doctorId, doctorName, specialty }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Filter out past dates
  const filterPassedDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  // Filter out weekends
  const filterWeekends = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/appointment-confirmation', {
        state: {
          appointmentData: {
            doctorId,
            doctorName,
            specialty,
            date: selectedDate,
            time: selectedTime,
            location: "Main Clinic"
          }
        }
      });
    }, 1500);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Selection */}
        <div className="relative" style={{ zIndex: 1001 }}>
          <label className="block text-gray-700 mb-2 font-medium">
            <FiCalendar className="inline-block mr-2" />
            Select Date
          </label>
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              filterDate={date => filterPassedDate(date) && filterWeekends(date)}
              minDate={new Date()}
              placeholderText="Select an appointment date"
              dateFormat="MMMM d, yyyy"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              calendarClassName="booking-calendar"
              popperClassName="calendar-popper"
              popperPlacement="bottom-start"
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [0, 8],
                  },
                },
                {
                  name: "preventOverflow",
                  options: {
                    boundary: "viewport",
                    padding: 8,
                  },
                },
              ]}
            />
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block text-gray-700 mb-2 font-medium">
              <FiClock className="inline-block mr-2" />
              Select Time
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg text-sm font-medium transition-colors
                    ${selectedTime === time
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-end"
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              className={`
                flex items-center px-6 py-3 rounded-lg font-medium text-white
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
                }
              `}
            >
              {isLoading ? (
                <span>Processing...</span>
              ) : (
                <>
                  Confirm Booking
                  <FiArrowRight className="ml-2" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </form>

      {/* Selected Details Summary */}
      {(selectedDate || selectedTime) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-gray-50 rounded-lg"
        >
          <h4 className="font-medium text-gray-800 mb-2">Appointment Summary</h4>
          <div className="text-sm text-gray-600">
            {selectedDate && (
              <p>Date: {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            )}
            {selectedTime && <p>Time: {selectedTime}</p>}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BookingForm;
